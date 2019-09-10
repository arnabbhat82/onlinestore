import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { CustommaterialModule } from './custommaterial.module';
import { FooterComponent } from './shared/footer/footer.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { SetproductComponent } from './admin/setproduct/setproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersComponent } from './user/orders/orders.component';
import { CartsComponent } from './user/carts/carts.component';
import { UserComponent } from './user/user/user.component';
import { ProductComponent } from './user/product/product.component';
import { LoginComponent } from './user/login/login.component';
import { AdmintabComponent } from './admin/admintab/admintab.component';
import { AdminordersComponent } from './admin/adminorders/adminorders.component';
import { AdmincartsComponent } from './admin/admincarts/admincarts.component';
import { AdminusersComponent } from './admin/adminusers/adminusers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutusComponent,
    FooterComponent,
    SettingsComponent,
    SetproductComponent,
    OrdersComponent,
    CartsComponent,
    UserComponent,
    ProductComponent,
    LoginComponent,
    AdmintabComponent,
    AdminordersComponent,
    AdmincartsComponent,
    AdminusersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustommaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
