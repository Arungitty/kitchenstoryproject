import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { PaymentComponent } from './payment/payment.component';
import { CrudHttpService } from './crud-http.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductlistComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CrudHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
