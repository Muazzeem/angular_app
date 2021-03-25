import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  stacksUrl = `/api/user/stacks`;
  userUrl = `/api/user/user-info`;
  info = [];

  private currentUserSubject = new BehaviorSubject<any>({} as any);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  
  provider: string ;

  constructor(private apiService: ApiService, private jwtService: JwtService) {
  }

  setProvider(data){
    this.provider= data;
  }

  getProvider(){
    return this.provider;
  }

  getStacks(): Observable<any> {
    return this.apiService.get(this.stacksUrl);
  }

  updateStacks(): Observable<any> {
    return this.apiService.put(this.stacksUrl, {});
  }

  getProfile(): Observable<any> {
    return this.apiService.get(this.userUrl);
  }
  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      this.apiService.get(this.userUrl)
      .subscribe(
        data => this.setAuth(data),
        err => this.purgeAuth()
      );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: any) {
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  // tslint:disable-next-line:typedef
  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as any);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type, credentials): Observable<any> {
    const route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
      .pipe(map(
      data => {
        this.setAuth(data.user);
        return data;
      }
    ));
  }

  getCurrentUser(): any {
    return this.currentUserSubject.value;
  }

  // Update the user on the server (email, pass, etc)
  update(user): Observable<any> {
    return this.apiService
    .put('/user', { user })
    .pipe(map(data => {
      // Update the currentUser observable
      this.currentUserSubject.next(data.user);
      return data.user;
    }));
  }
}