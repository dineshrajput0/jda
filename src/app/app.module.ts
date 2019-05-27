import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavigationModule } from './navigation/navigation.module';
import { HeaderModule} from './header/header.module';
import { HomeComponent }   from './home/home.component';
import { OrderSummaryComponent }   from './module/ordersummary/ordersummary.component';
import { CustomerInquieryComponent }   from './module/customerinquiery/customerinquiery.component';
import { AppRoutingModule } from './app-routing.module';
import {DemoMaterialModule} from './material-module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
  OrderSummaryComponent,
  CustomerInquieryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
	NavigationModule,
    HeaderModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
