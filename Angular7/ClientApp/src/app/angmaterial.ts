import {
  MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule,
  MatInputModule, MatToolbarModule, MatIconModule, MatSelectModule, MatExpansionModule,
  MatSnackBarModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
 
@NgModule({
  imports: [MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule,
    MatInputModule, MatToolbarModule, MatIconModule, MatSelectModule, MatExpansionModule, MatSnackBarModule, MatSidenavModule],
  exports: [MatButtonModule, MatSliderModule, MatCardModule, MatGridListModule, MatFormFieldModule,
    MatInputModule, MatToolbarModule, MatIconModule, MatSelectModule, MatExpansionModule, MatSnackBarModule, MatSidenavModule]
})
 
export class AngMaterialModule {
}
