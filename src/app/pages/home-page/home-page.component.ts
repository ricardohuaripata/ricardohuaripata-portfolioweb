import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TechnologiesComponent } from '../../components/technologies/technologies.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, TechnologiesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  form: FormGroup;
  loading: boolean = false;
  submited: boolean = false;
  successSubmit: boolean = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, this.emailValidator]],
      message: ['', [Validators.required]],
    });
  }

  emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const email = control.value;
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email && !pattern.test(email)) {
      return { invalidEmail: true };
    }

    return null;
  }

  onSubmit(): void {
    this.submited = true;
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    setTimeout(() => {
      this.form.reset();
      this.submited = false;
      this.successSubmit = true;
      this.loading = false;
    }, 1000);
  }
}
