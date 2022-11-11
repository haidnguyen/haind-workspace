import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'haind-workspace-root',
  standalone: true,
  imports: [RouterModule],
  template: `
	 	<div (click)="onClick()"></div>
     <router-outlet></router-outlet>
   `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'ng-conduit';


	onClick() {
		console.log('lsp');
	}
}
