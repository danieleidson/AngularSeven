import { MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule, MatSelectModule, MatExpansionModule } from '@angular/material';
import { NgModule } from '@angular/core';
 
@NgModule({
  imports: [MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule, MatSelectModule, MatExpansionModule],
  exports: [MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatIconModule, MatSelectModule, MatExpansionModule]
})
 
export class AngMaterialModule {
}
