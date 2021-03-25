import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
const routes = [{
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'infinite-list',
                component: InfiniteListComponent,
            },
        ],
    }];
let LayoutRoutingModule = class LayoutRoutingModule {
};
LayoutRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LayoutRoutingModule);
export { LayoutRoutingModule };
//# sourceMappingURL=layout-routing.module.js.map