import { Component } from '@angular/core';

import { Subscription } from 'rxjs';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';
  subscription: Subscription
  constructor(private headerService: HeaderService) {
    this.subscription = this.headerService.getTitle().subscribe(title => {
      this.title = title["text"];
    });
  }

}
