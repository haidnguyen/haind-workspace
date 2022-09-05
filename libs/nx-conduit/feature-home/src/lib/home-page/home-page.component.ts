import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticleListComponent } from '../article-list/article-list.component';
import { TagListComponent } from '../tag-list/tag-list.component';

@Component({
  selector: 'haind-workspace-home-page',
  standalone: true,
  imports: [CommonModule, ArticleListComponent, TagListComponent],
  template: `
    <section class="bg-highlight text-center p-8 mb-8">
      <h1 class="text-white text-5xl font-bold mb-2 drop-shadow">conduit</h1>
      <p class="text-white text-2xl font-light">A place to share your knowledge</p>
    </section>

    <section class="container mx-auto grid grid-cols-4">
      <div class="col-span-3">
        <haind-workspace-article-list></haind-workspace-article-list>
      </div>
      <div class="col-span-1">
        <haind-workspace-tag-list></haind-workspace-tag-list>
      </div>
    </section>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
