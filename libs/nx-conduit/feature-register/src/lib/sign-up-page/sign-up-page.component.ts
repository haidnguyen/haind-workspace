import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '@haind-workspace/nx-conduit/data-access';
import { ButtonComponent } from '@haind-workspace/nx-conduit/ui-button';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'haind-workspace-sign-up-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent, ReactiveFormsModule],
  template: `
    <main class="flex flex-col justify-center items-center w-full p-6">
      <h1 class="text-4xl mb-2">Sign up</h1>
      <a routerLink="/login" class="text-highlight">Have an account?</a>
      <form class="mt-4 w-[440px]" [formGroup]="form" (ngSubmit)="onSubmit()">
        <fieldset class="grid grid-rows-1 gap-4">
          <input
            formControlName="username"
            type="text"
            placeholder="Username"
            class="border border-gray-200 p-2 rounded text-xl px-6 py-3"
          />
          <input
            formControlName="email"
            type="text"
            placeholder="Email"
            class="border border-gray-200 p-2 rounded text-xl px-6 py-3"
          />
          <input
            formControlName="password"
            type="password"
            placeholder="Password"
            class="border border-gray-200 p-2 rounded text-xl px-6 py-3"
          />
        </fieldset>
        <fieldset class="flex justify-end mt-4">
          <button conduitButton type="submit" class="text-xl h-12 px-6" [disabled]="form.invalid">Submit</button>
        </fieldset>
      </form>
    </main>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpPageComponent implements OnDestroy {
  form = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly fb: FormBuilder,
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit() {
    this.userService
      .register({
        username: this.form.value.username ?? '',
        password: this.form.value.password ?? '',
        email: this.form.value.email ?? '',
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.router.navigateByUrl('/home');
      });
  }
}
