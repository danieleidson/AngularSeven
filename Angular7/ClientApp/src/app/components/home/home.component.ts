import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private headerService: HeaderService) {
    this.headerService.setTitle("Home");
  }

}
