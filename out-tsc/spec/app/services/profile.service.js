import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
let ProfileService = class ProfileService {
    constructor(apiService) {
        this.apiService = apiService;
        this.profileURL = `/api/user/user-info`;
        this.profileInfo = [];
    }
    // tslint:disable-next-line:typedef
    loadProfile() {
        const url = this.profileURL;
        this.apiService.get(url)
            .subscribe((data) => {
            this.profileInfo = [data];
            console.warn(this.profileInfo);
        }, err => {
            console.warn(err);
        });
    }
};
ProfileService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [ApiService])
], ProfileService);
export { ProfileService };
//# sourceMappingURL=profile.service.js.map