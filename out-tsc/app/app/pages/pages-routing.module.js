import { __decorate } from "tslib";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
const routes = [{
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'profile',
                component: ProfileComponent,
            },
            {
                path: 'layout',
                loadChildren: () => import('./layout/layout.module')
                    .then(m => m.LayoutModule),
            },
            {
                path: 'forms',
                loadChildren: () => import('./forms/forms.module')
                    .then(m => m.FormsModule),
            },
            {
                path: 'miscellaneous',
                loadChildren: () => import('./miscellaneous/miscellaneous.module')
                    .then(m => m.MiscellaneousModule),
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: '**',
                component: NotFoundComponent,
            },
        ],
    }];
let PagesRoutingModule = class PagesRoutingModule {
};
PagesRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PagesRoutingModule);
export { PagesRoutingModule };
//# sourceMappingURL=pages-routing.module.js.map