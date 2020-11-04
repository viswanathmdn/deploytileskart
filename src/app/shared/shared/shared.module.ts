import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusPipe } from '../../shared/status.pipe';
import { StarComponent } from '../../shared/star/star.component';

@NgModule({
  declarations: [StatusPipe,StarComponent],
  imports: [
    CommonModule
  ],
  exports:[StatusPipe,StarComponent]
})
export class SharedModule { }
