import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';

import { CustomerService } from './customer.service';



import { AppComponent } from './app.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
