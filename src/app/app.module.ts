import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { HeaderUserComponent } from './frontOffice/header-user/header-user.component';
import { FooterUserComponent } from './frontOffice/footer-user/footer-user.component';
import { BodyUserComponent } from './frontOffice/body-user/body-user.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { ListcartComponent } from './listcart/listcart.component';
import { ListusersComponent } from './backOffice/User/listusers/listusers.component';
import { ListDeliveryComponent } from './backOffice/Delivery/list-delivery/list-delivery.component';
import { ListproductComponent } from './frontOffice/Shop/listproduct/listproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SideAdminComponent,
    BodyAdminComponent,
    AllTemplateAdminComponent,
    HeaderUserComponent,
    FooterUserComponent,
    BodyUserComponent,
    AllTemplateUserComponent,
    ListproductComponent,
    ListDeliveryComponent,
    ListusersComponent,
    ListcartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
