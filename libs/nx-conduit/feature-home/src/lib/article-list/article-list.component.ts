import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArticlePreviewComponent } from '../article-preview/article-preview.component';

@Component({
  selector: 'haind-workspace-article-list',
  standalone: true,
  imports: [CommonModule, ArticlePreviewComponent],
  template: `
    <haind-workspace-article-preview
      *ngFor="let article of articles"
      [article]="article"
    ></haind-workspace-article-preview>
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
      slug: 'create-new-implementation',
    },
    {
      title: 'Explore implementaions',
      description: 'discover the implementaions created by the RealWorld communitty',
      author: 'Gerome',
      like: 2186,
      tags: ['codebaseShow', 'implementation'],
      date: new Date('2011-11-24'),
      slug: 'create-new-implementation',
    },
    {
      title: 'Welcome to RealWorld project',
      description: 'Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',
      author: 'Genome',
      like: 1573,
      tags: ['welcome', 'introduction'],
      date: new Date('2011-11-24'),
      slug: 'create-new-implementation',
    },
    {
      title: 'Welcome to RealWorld project',
      description: 'Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',
      author: 'Genome',
      like: 1573,
      tags: ['welcome', 'introduction'],
      date: new Date('2011-11-24'),
      slug: 'create-new-implementation',
    },
    {
      title: 'Welcome to RealWorld project',
      description: 'Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',
      author: 'Genome',
      like: 1573,
      tags: ['welcome', 'introduction'],
      date: new Date('2011-11-24'),
      slug: 'create-new-implementation',
    }
  );
}
