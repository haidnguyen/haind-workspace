/* eslint-disable @angular-eslint/component-selector */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="bg-gray-100 p-2 rounded">
      <div>Popular Tags</div>
      <div class="flex mt-1 flex-wrap">
        <span *ngFor="let tag of tags" class="mr-2 text-white text-xs bg-gray-400 px-2 py-1 rounded-full mb-1">
          {{ tag }}
        </span>
      </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagListComponent {
  tags = ['implementations', 'welcome', 'introduction', 'codebaseShow'];
  @Input()
  tag = '';
}
