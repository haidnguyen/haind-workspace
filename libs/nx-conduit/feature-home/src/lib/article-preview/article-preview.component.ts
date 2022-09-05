import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@haind-workspace/nx-conduit/ui-button';

@Component({
  selector: 'haind-workspace-article-preview',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  template: `
    <div class="border-t border-gray-200 py-6">
      <div class="flex justify-between items-center mb-4">
        <div class="flex items-center">
          <img src="https://api.realworld.io/images/demo-avatar.png" alt="author avatar" class="rounded-full mr-2" />
          <div class="flex flex-col">
            <span class="text-highlight font-medium">{{ article.author }}</span>
            <span class="text-xs text-gray-300">{{ article.date | date: 'mediumDate' }}</span>
          </div>
        </div>
        <button type="button" conduitButton>
          {{ article.like }}
        </button>
      </div>
      <a [routerLink]="['/article', article.slug]">
        <h1 class="text-black text-2xl font-semibold">
          {{ article.title }}
        </h1>

        <p class="text-gray-400 font-light">
          {{ article.description }}
        </p>
      </a>
      <div class="mt-4 flex justify-between items-center">
        <a [routerLink]="['/article', article.slug]" class="text-gray-300 font-extralight text-xs">Read more...</a>
        <ul class="flex">
          <li
            *ngFor="let tag of article.tags"
            class="text-gray-300 border border-gray-300 px-2 py-1 rounded-full text-xs mr-2 last:mr-0"
          >
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlePreviewComponent {
  @Input() article: any;
}
