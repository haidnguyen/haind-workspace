import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'haind-workspace-home-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-highlight">
      <h1>conduit</h1>
      <p>A place to share your knowledge</p>
    </section>
    <section>Page</section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
