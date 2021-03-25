import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
let RecommendedCompaniesService = class RecommendedCompaniesService {
    constructor(apiService) {
        this.apiService = apiService;
        this.baseUrl = `/api/user/companies`;
    }
    getCompannies() {
        return this.apiService.get(this.baseUrl);
    }
};
RecommendedCompaniesService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [ApiService])
], RecommendedCompaniesService);
export { RecommendedCompaniesService };
//# sourceMappingURL=recommendedcompanies.service.js.map