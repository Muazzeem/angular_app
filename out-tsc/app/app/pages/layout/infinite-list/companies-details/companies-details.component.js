import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { NewsPost } from '../../news.service';
let CompaniesDetailsComponent = class CompaniesDetailsComponent {
};
__decorate([
    Input(),
    __metadata("design:type", NewsPost)
], CompaniesDetailsComponent.prototype, "post", void 0);
CompaniesDetailsComponent = __decorate([
    Component({
        selector: 'ngx-news-post',
        templateUrl: 'companies-detailscomponent.html',
    })
], CompaniesDetailsComponent);
export { CompaniesDetailsComponent };
//# sourceMappingURL=companies-details.component.js.map