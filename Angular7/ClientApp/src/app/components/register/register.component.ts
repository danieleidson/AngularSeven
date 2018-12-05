import { Component } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  title = "Register";
  public onClick(event: any): void {
    event.preventDefault();
    alert("submit clicked");
  }
}
