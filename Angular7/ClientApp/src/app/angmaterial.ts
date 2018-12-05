import {
  MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule,
  MatInputModule, MatToolbarModule, MatIconModule, MatSelectModule, MatExpansionModule,
  MatSnackBarModule
} from '@angular/material';
import { NgModule } from '@angular/core';
 
@NgModule({
  imports: [MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule,
    MatInputModule, MatToolbarModule, MatIconModule, MatSelectModule, MatExpansionModule, MatSnackBarModule],
  exports: [MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule,
    MatInputModule, MatToolbarModule, MatIconModule, MatSelectModule, MatExpansionModule, MatSnackBarModule]
})
 
export class AngMaterialModule {
}
