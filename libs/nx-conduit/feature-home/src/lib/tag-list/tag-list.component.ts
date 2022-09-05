import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'haind-workspace-tag-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>tag-list works!</p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagListComponent {}
