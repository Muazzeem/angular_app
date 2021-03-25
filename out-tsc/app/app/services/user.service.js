import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { JwtService } from './jwt.service';
let UserService = class UserService {
    constructor(apiService, jwtService) {
        this.apiService = apiService;
        this.jwtService = jwtService;
        this.stacksUrl = `/api/user/stacks`;
        this.userUrl = `/api/user/user-info`;
        this.info = [];
        this.currentUserSubject = new BehaviorSubject({});
        this.currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
        this.isAuthenticatedSubject = new ReplaySubject(1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    setProvider(data) {
        this.provider = data;
    }
    getProvider() {
        return this.provider;
    }
    getStacks() {
        return this.apiService.get(this.stacksUrl);
    }
    updateStacks() {
        return this.apiService.put(this.stacksUrl, {});
    }
    getProfile() {
        return this.apiService.get(this.userUrl);
    }
    populate() {
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get(this.userUrl)
                .subscribe(data => this.setAuth(data), err => this.purgeAuth());
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    }
    setAuth(user) {
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
        this.currentUserSubject.next({});
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    }
    attemptAuth(type, credentials) {
        const route = (type === 'login') ? '/login' : '';
        return this.apiService.post('/users' + route, { user: credentials })
            .pipe(map(data => {
            this.setAuth(data.user);
            return data;
        }));
    }
    getCurrentUser() {
        return this.currentUserSubject.value;
    }
    // Update the user on the server (email, pass, etc)
    update(user) {
        return this.apiService
            .put('/user', { user })
            .pipe(map(data => {
            // Update the currentUser observable
            this.currentUserSubject.next(data.user);
            return data.user;
        }));
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [ApiService, JwtService])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map