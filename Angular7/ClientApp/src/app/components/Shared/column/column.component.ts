import { Component, Input } from '@angular/core';

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styles: [':host { display:contents; }']
})
export class ColumnComponent {
  @Input() lg: number = 12;
  @Input() md: number;
}
