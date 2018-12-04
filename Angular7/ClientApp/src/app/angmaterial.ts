import { MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule } from '@angular/material';
import { NgModule } from '@angular/core';
 
@NgModule({
  imports: [MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule],
  exports: [MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule]
})
 
export class AngMaterialModule { }
