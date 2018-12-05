import { MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
 
@NgModule({
  imports: [MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatToolbarModule],
  exports: [MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatToolbarModule]
})
 
export class AngMaterialModule {
}
