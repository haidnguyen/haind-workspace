import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'haind-workspace-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  template: `
    <haind-workspace-header></haind-workspace-header>
    <router-outlet></router-outlet>
    <haind-workspace-footer></haind-workspace-footer>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
