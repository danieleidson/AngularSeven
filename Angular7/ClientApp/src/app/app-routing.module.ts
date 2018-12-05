import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalInformationModule } from './components/personal-information/personal-information.component';

const routes: Routes = [
  { path: 'personal-information', component: PersonalInformationModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
