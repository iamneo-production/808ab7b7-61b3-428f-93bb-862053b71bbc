
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrderlistComponent } from './admin/orderlist/orderlist.component';
import { ProductEditComponent } from './admin/product-edit/product-edit.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddproductComponent,
    AdminNavComponent,
    DashboardComponent,
    OrderlistComponent,
    ProductEditComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }