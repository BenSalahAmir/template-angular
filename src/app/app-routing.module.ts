import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllTemplateAdminComponent} from "./backOffice/all-template-admin/all-template-admin.component";
import {BodyAdminComponent} from "./backOffice/body-admin/body-admin.component";
import {AllTemplateUserComponent} from "./frontOffice/all-template-user/all-template-user.component";
import {BodyUserComponent} from "./frontOffice/body-user/body-user.component";
import { ListusersComponent } from './backOffice/User/listusers/listusers.component';
import { ListDeliveryComponent } from './backOffice/Delivery/list-delivery/list-delivery.component';
import { ListcartComponent } from './listcart/listcart.component';
import { ListproductComponent } from './frontOffice/Shop/listproduct/listproduct.component';

const routes: Routes = [
  {
    path:'admin',
    component:AllTemplateAdminComponent,
    children:[
      {
        path:'admin',component:BodyAdminComponent

      },
      {
        path:'listu',component:ListusersComponent
      },
      {
        path:'listdelivery',component:ListDeliveryComponent
      }




      
    ]

  },
  {
    path:'',
    component: AllTemplateUserComponent,
    children:[
      {
        path:'user',
        component: BodyUserComponent
      }
      
    ]
  },



  {
    path:'user',
    component: AllTemplateUserComponent,
    children:[
      {
        path:'listproduct',
        component: ListproductComponent
      }
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
