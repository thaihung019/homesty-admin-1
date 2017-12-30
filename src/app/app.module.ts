import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VerticalNavComponent } from './component/navigation/vertical-nav/vertical-nav.component';
import { HorizontalNavComponent } from './component/navigation/horizontal-nav/horizontal-nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {PerfectScrollbarModule, PerfectScrollbarConfigInterface, PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ConfirmDeleteComponent } from './component/dialog/confirm-delete/confirm-delete.component';
import {MatButtonModule, MatDialogModule, MatSnackBarModule} from '@angular/material';
import {UserModule} from './modules/user/user.module';
import {AuthenService} from './service/auth/authen.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 500
};

@NgModule({
  declarations: [
    AppComponent,
    VerticalNavComponent,
    HorizontalNavComponent,
    PageNotFoundComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,

    UserModule,

    AppRoutingModule,

    PerfectScrollbarModule,

    // Mat Modules
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  entryComponents: [
    ConfirmDeleteComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    AuthenService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
