import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngMaterialModule } from './angmaterial';
import { PersonalInformationModule } from './components/personal-information/personal-information.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInformationModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
