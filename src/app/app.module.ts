import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { AddItemPopComponent } from './Stocks/add-item-pop/add-item-pop.component';
import { MySalesComponent } from './SalesFolder/my-history-sales/my-sales.component';
import { SalesHomeComponent } from './SalesFolder/sales-home/sales-home.component';
import { TodaysSalesComponent } from './SalesFolder/todays-sales/todays-sales.component';
import { RegisterUserComponent } from './RegisterUser/register-user/register-user.component';
import { UpdateSalesComponent } from './SalesFolder/update-sales/update-sales.component';

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
    AddItemPopComponent,
    MySalesComponent,
    SalesHomeComponent,
    TodaysSalesComponent,
    RegisterUserComponent,
    UpdateSalesComponent,
  ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    FormsModule,
    CommonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
  ],
  exports: [
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
