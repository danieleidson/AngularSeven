import { MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
 
@NgModule({
  imports: [MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule],
  exports: [MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule]
})
 
export class AngMaterialModule {
}
