import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'haind-workspace-home-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>home-page works!</p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
