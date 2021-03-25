import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbListModule, NbRouteTabsetModule, NbStepperModule, NbTabsetModule, NbUserModule, } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { InfiniteListComponent } from './infinite-list/infinite-list.component';
import { CompaniesDetailsComponent } from './infinite-list/companies-details/companies-details.component';
import { NewsService } from './news.service';
let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    NgModule({
        imports: [
            FormsModule,
            ReactiveFormsModule,
            ThemeModule,
            NbTabsetModule,
            NbRouteTabsetModule,
            NbStepperModule,
            NbCardModule,
            NbButtonModule,
            NbListModule,
            NbAccordionModule,
            NbUserModule,
            LayoutRoutingModule,
        ],
        declarations: [
            LayoutComponent,
            InfiniteListComponent,
            CompaniesDetailsComponent,
        ],
        providers: [
            NewsService,
        ],
    })
], LayoutModule);
export { LayoutModule };
//# sourceMappingURL=layout.module.js.map