import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'haind-workspace-sign-up-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>sign-up-page works!</p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpPageComponent {}
