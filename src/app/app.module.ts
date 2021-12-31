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
import { StockComponent } from './Stocks/stockHome/stock.component';
import { AvailableStocksComponent } from './Stocks/available-stocks/available-stocks.component';
import { IndentedStocksComponent } from './Stocks/indented-stocks/indented-stocks.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    TestLayoutComponent,
    LoginComponent,
    AdminOptionsComponent,
    StockComponent,
    AvailableStocksComponent,
    IndentedStocksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
