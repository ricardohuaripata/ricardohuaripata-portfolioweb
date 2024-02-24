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
import { ProjectsComponent } from "../../components/projects/projects.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [ReactiveFormsModule, CommonModule, TechnologiesComponent, ProjectsComponent, FooterComponent]
})
export class HomePageComponent {
  form: FormGroup;
  loading: boolean = false;
  submited: boolean = false;
  successSubmit: boolean = false;
  experienciaList = [
    {
      puesto: 'QA Automation',
      empresa: 'Atos España',
      enlace: 'https://atos.net/es/spain',
      fecha: 'Marzo 2023 - Junio 2023',
      descripcion: 'Estancia en empresa de consultoría formando parte de un equipo de QA trabajando en el control de calidad del frontend de una aplicación web mediante pruebas automatizadas. Las tecnologías llevadas a cabo para la automatización de pruebas fueron Selenium en un proyecto Spring Boot, Git para el control de versiones, Trello y Github para la gestión de tareas y Scrum como metodología de desarrollo.'
    },
  ];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, this.emailValidator]],
      subject: ['', [Validators.required]],
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
