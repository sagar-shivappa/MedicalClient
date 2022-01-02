import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOptionsComponent } from './admin-options/admin-options.component';
import { AppComponent } from './app.component';
import { StockComponent } from './Stocks/stockHome/stock.component';
import { LoginComponent } from './login/login.component';
import { AvailableStocksComponent } from './Stocks/available-stocks/available-stocks.component';
import { IndentedStocksComponent } from './Stocks/indented-stocks/indented-stocks.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin/:name', component: AdminOptionsComponent },
  { path: 'stock/:name', component: StockComponent },
  { path: 'availableStock', component: AvailableStocksComponent },
  { path: 'indentedStock', component: IndentedStocksComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
