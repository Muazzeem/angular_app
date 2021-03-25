import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
let PagesModule = class PagesModule {
};
PagesModule = __decorate([
    NgModule({
        imports: [
            PagesRoutingModule,
            ThemeModule,
            NbMenuModule,
            DashboardModule,
            MiscellaneousModule,
            MatFormFieldModule,
            MatCardModule,
            MatButtonModule,
            MatDialogModule,
            MatInputModule,
            ReactiveFormsModule,
        ],
        declarations: [
            PagesComponent,
        ],
        exports: [],
    })
], PagesModule);
export { PagesModule };
//# sourceMappingURL=pages.module.js.map