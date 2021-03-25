import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CompanyDetailsComponentService {

  userUrl = `/api/company/`;

  constructor( private apiService: ApiService) {
  }

  getSingleCompany(id: any): Observable<any> {
    const url = this.userUrl + id;
    return this.apiService.get(url);
  }

}
