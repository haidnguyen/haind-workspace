import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'haind-workspace-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>footer works!</p>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
