import { MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule, MatSelectModule } from '@angular/material';
import { NgModule } from '@angular/core';
 
@NgModule({
  imports: [MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule, MatSelectModule],
  exports: [MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule, MatSelectModule]
})
 
export class AngMaterialModule {
}
