import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'haind-workspace-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="shadow-xl">
      <nav class="container mx-auto flex justify-between items-center h-14">
        <a href="/" class="text-2xl text-green-600">conduit</a>

        <ul class="grid grid-flow-col grid-cols-3 gap-4 text-gray-500">
          <li>
            <a routerLink="/home" routerLinkActive="text-black">Home</a>
          </li>
          <li>
            <a routerLink="/login" routerLinkActive="text-black">Sign in</a>
          </li>
          <li>
            <a routerLink="/register" routerLinkActive="text-black">Sign up</a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {}
