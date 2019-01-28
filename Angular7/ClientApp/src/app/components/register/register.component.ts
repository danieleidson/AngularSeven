import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { HttpClient } from "@angular/common/http";
import { HeaderService } from 'src/app/services/header.service';
//export interface States {
//  value: string;
//  text: string;
//}

export interface Person {
  firstName: string;
  lastName: string;
  middleName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  homePhone: string;
  cellPhone: string;
  email: string;
}


@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  constructor(public snackBar: MatSnackBar, public http: HttpClient, private headerService: HeaderService) {
    this.headerService.setTitle("Register");
  }

  //states: States[] = [
  //  { value: 'AZ', text: 'Arizona' },
  //  { value: 'KY', text: 'Kentucky' },
  //  { value: 'MI', text: 'Michigan' },
  //  { value: 'VA', text: 'Virginia' }
  //];


  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ]


  public onSubmit(event: any, action: string, person: Person): void {
    event.preventDefault();

    this.http.post('/api/SampleData/Test', person)
      .subscribe(
        data => {
          this.snackBar.open(data["responseText"], action, {
            duration: 2000,
          });
        },
        error => {
          console.log("Error", error);
        }
      );


  }
}
