import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './QBH Solution/form/form.component';
import { TableComponent } from './QBH Solution/table/table.component';
const routes: Routes = [
  {path:'add',component:AddCartComponent},
  {path:'main',component:MainComponent},
  {path:'form',component:FormComponent},
  {path:'table',component:TableComponent},
  {path:'form/:id',component:FormComponent},

  { path: '', redirectTo: '/form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
