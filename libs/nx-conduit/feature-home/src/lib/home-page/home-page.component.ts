import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'haind-workspace-home-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-highlight text-center p-8 mb-8">
      <h1 class="text-white text-5xl font-bold mb-2 drop-shadow">conduit</h1>
      <p class="text-white text-2xl font-light">A place to share your knowledge</p>
    </section>

    <section>Page</section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
