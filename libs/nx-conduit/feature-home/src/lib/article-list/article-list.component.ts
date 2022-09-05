import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'haind-workspace-article-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>article-list works!</p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent {}
