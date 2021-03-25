import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { NbButtonModule, NbCardModule, NbProgressBarModule, NbTabsetModule, NbListModule, NbInputModule, } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    NgModule({
        imports: [
            ThemeModule,
            NbCardModule,
            NbButtonModule,
            NbTabsetModule,
            NbListModule,
            NbProgressBarModule,
            NgxEchartsModule,
            NgxChartsModule,
            NbInputModule,
            ChartsModule,
        ],
        declarations: [
            DashboardComponent,
        ],
        providers: [],
    })
], DashboardModule);
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map