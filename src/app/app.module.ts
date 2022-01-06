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
import { ExpiredStocksComponent } from './Stocks/expired-stocks/expired-stocks.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

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
    ExpiredStocksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    CommonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [MatSortModule, MatFormFieldModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
