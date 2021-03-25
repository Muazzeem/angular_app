import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
let CompanyDetailsComponentService = class CompanyDetailsComponentService {
    constructor(apiService) {
        this.apiService = apiService;
        this.userUrl = `/api/company/`;
    }
    getSingleCompany(id) {
        const url = this.userUrl + id;
        return this.apiService.get(url);
    }
};
CompanyDetailsComponentService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [ApiService])
], CompanyDetailsComponentService);
export { CompanyDetailsComponentService };
//# sourceMappingURL=company-details-component.service.js.map