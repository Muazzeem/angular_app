import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class RecommendedCompaniesService {

  baseUrl = `/api/user/companies`;
  constructor(private apiService: ApiService) {
  }

  getCompannies(): Observable<any> {
    return this.apiService.get(this.baseUrl);
  }

}
