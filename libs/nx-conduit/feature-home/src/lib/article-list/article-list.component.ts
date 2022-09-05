import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'haind-workspace-article-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngFor="let article of articles" class="border-b border-gray-200 py-6 last:border-b-0">
      <div class="flex justify-between items-center mb-4">
        <div class="flex items-center">
          <img src="https://api.realworld.io/images/demo-avatar.png" alt="author avatar" class="rounded-full mr-2" />
          <div class="flex flex-col">
            <span class="text-highlight font-medium">{{ article.author }}</span>
            <span class="text-xs text-gray-300">{{ article.date | date: 'mediumDate' }}</span>
          </div>
        </div>
        <button type="button" class="border border-highlight px-2 h-7 text-sm rounded text-highlight">
          {{ article.like }}
        </button>
      </div>

      <h1 class="text-black text-2xl font-semibold">
        {{ article.title }}
      </h1>

      <p class="text-gray-400 font-light">
        {{ article.description }}
      </p>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent {
  articles = Array.of(
    {
      title: 'Create a new implementaion',
      description: 'join the community by creating a new implementaion',
      author: 'Gerome',
      like: 3755,
      tags: ['implementaions'],
      date: new Date('2011-11-24'),
    },
    {
      title: 'Explore implementaions',
      description: 'discover the implementaions created by the RealWorld communitty',
      author: 'Gerome',
      like: 2186,
      tags: ['codebaseShow', 'implementation'],
      date: new Date('2011-11-24'),
    },
    {
      title: 'Welcome to RealWorld project',
      description: 'Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',
      author: 'Genome',
      like: 1573,
      tags: ['welcome', 'introduction'],
      date: new Date('2011-11-24'),
    },
    {
      title: 'Welcome to RealWorld project',
      description: 'Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',
      author: 'Genome',
      like: 1573,
      tags: ['welcome', 'introduction'],
      date: new Date('2011-11-24'),
    },
    {
      title: 'Welcome to RealWorld project',
      description: 'Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',
      author: 'Genome',
      like: 1573,
      tags: ['welcome', 'introduction'],
      date: new Date('2011-11-24'),
    }
  );
}
