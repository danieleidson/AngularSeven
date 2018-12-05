import { Component } from '@angular/core';

//export interface States {
//  value: string;
//  text: string;
//}

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  title = "Register";

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


  public onClick(event: any): void {
    event.preventDefault();
    alert("submit clicked");
  }
}
