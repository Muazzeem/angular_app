import { __decorate } from "tslib";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowAuthedDirective } from './services/show-authed.directive';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NbBadgeModule, NbCardModule, NbChatModule, NbDatepickerModule, NbDialogModule, NbListModule, NbMenuModule, NbSidebarModule, NbTabsetModule, NbToastrModule, NbUserModule, NbWindowModule, } from '@nebular/theme';
import { ProfileComponent } from './pages/profile/profile.component';
import { PagesModule } from './pages/pages.module';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent, ProfileComponent, ShowAuthedDirective],
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            HttpClientModule,
            AppRoutingModule,
            NbSidebarModule.forRoot(),
            NbMenuModule.forRoot(),
            NbDatepickerModule.forRoot(),
            NbDialogModule.forRoot(),
            NbWindowModule.forRoot(),
            NbToastrModule.forRoot(),
            NbChatModule.forRoot({
                messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
            }),
            CoreModule.forRoot(),
            ThemeModule.forRoot(),
            NgHttpLoaderModule.forRoot(),
            NbCardModule,
            NbTabsetModule,
            NbBadgeModule,
            MatChipsModule,
            MatAutocompleteModule,
            NbListModule,
            NbUserModule,
            PagesModule,
        ],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map