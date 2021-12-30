import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './Home/base-layout/base-layout.component';
import { TestLayoutComponent } from './Home/test-layout/test-layout.component';
import { LoginComponent } from './login/login.component';
import { AdminOptionsComponent } from '../app/admin-options/admin-options.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    TestLayoutComponent,
    LoginComponent,
    AdminOptionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
