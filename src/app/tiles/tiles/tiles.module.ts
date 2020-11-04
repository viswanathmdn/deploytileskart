import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TilesRoutingModule } from './tiles-routing.module';

import { TilesComponent } from './tiles.component';
import { TileComponent } from './tile/tile.component';


import { TileDetailComponent } from '../../users/login/tile-detail/tile-detail.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [  TilesComponent, TileComponent, TileDetailComponent],
  imports: [
    CommonModule,
    TilesRoutingModule,
    TilesRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ]
})
export class TilesModule { }
