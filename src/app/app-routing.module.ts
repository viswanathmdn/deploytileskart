import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {LoginComponent} from './users/login/login.component';
import {TilesComponent} from './tiles/tiles/tiles.component';
import { WelcomeComponent } from './users/login/welcome/welcome.component';
import {TileDetailComponent} from './users/login/tile-detail/tile-detail.component';
import {RegisterComponent} from './users/register/register.component';

import {AuthenticationGuard} from 'src/app/users/authentication.guard';




const routes: Routes = [{
  path:'login',component:LoginComponent
 },
 {
  path:'tiles',component:TilesComponent
 },
 {
  path:'',redirectTo:'login',pathMatch:'prefix'
 },
 {
  path:"tiles/:Id/:Name",component:TileDetailComponent
 },
 {
   path:"register", component : RegisterComponent
  },
 {
   path:'welcome',component:WelcomeComponent, canActivate:[AuthenticationGuard]
 },
 {
  path:'**',redirectTo:'login',pathMatch:'prefix'
 }
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
