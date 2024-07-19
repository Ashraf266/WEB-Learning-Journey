import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [],
  template: `
  <button>{{value}}</button>
  `,
  styleUrl: './square.component.scss'
})
export class SquareComponent {
    @Input() value?: 'X' | 'O';
}
