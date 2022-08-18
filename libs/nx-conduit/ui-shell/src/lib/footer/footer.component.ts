import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'haind-workspace-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-100 h-14 flex items-center absolute bottom-0 w-full">
      <div class="container mx-auto text-gray-400 text-sm">
        <a href="/" class="text-green-600">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io" class="text-green-600 text-sm">Thinkster</a>
          . Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {}
