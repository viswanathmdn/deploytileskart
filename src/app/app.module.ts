import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TilesComponent } from './tiles/tiles/tiles.component';
import { LoginComponent } from './users/login/login.component';
import {RouterModule} from '@angular/router';
import   {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StatusPipe } from './shared/status.pipe';
import { TileComponent } from './tiles/tiles/tile/tile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarComponent } from './shared/star/star.component';
import { WelcomeComponent } from './users/login/welcome/welcome.component';
import { TileDetailComponent } from './users/login/tile-detail/tile-detail.component';
import { RegisterComponent } from './users/register/register.component';
import { MaxvalueDirective } from './shared/maxvalue.directive'

@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    LoginComponent,
    StatusPipe,
    TileComponent,
    StarComponent,
    WelcomeComponent,
    TileDetailComponent,
    RegisterComponent,
    MaxvalueDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
