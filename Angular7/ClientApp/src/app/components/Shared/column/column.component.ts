import { Component, Input } from '@angular/core';

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styles: [':host { width: 100%; }']
})
export class ColumnComponent {
  @Input() lg: number = 12;
  @Input() md: number;
}
