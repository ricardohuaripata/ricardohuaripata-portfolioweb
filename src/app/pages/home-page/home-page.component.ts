import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TechnologiesComponent } from '../../components/technologies/technologies.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { FooterComponent } from '../../components/footer/footer.component';
import emailjs from '@emailjs/browser';
import { SeoService } from '../../services/seo.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TechnologiesComponent,
    ProjectsComponent,
    FooterComponent,
  ],
})
export class HomePageComponent implements OnInit {
  title = 'Ricardo Huaripata | Full Stack Developer';
  description = '¡Hola Mundo! Soy Ricardo, un apasionado de la tecnología, los deportes y los desafíos. Con una formación en Desarrollo de aplicaciones web, actualmente me encuentro en un emocionante viaje de aprendizaje para especializarme como Full Stack Developer y explorar nuevas oportunidades en la industria tecnológica.';
  page_image_url = environment.BASE_URL + '/assets/images/portfolio-web.webp';
  seo = inject(SeoService);
  form: FormGroup;
  loading: boolean = false;
  submited: boolean = false;
  successSubmit: boolean = false;
  experiences = [
    {
      job: 'Software QA Automation',
      enterprise: 'Atos España',
      link: 'https://atos.net/es/spain',
      date: 'Marzo 2023 - Junio 2023',
      description:
        '<p>Estancia en empresa de consultoría formando parte de un equipo de QA trabajando en el control de calidad del frontend de una aplicación web mediante pruebas automatizadas. Las tecnologías llevadas a cabo para la automatización de pruebas fueron Selenium en un proyecto Spring Boot, Git para el control de versiones, Trello y Github para la gestión de tareas y Scrum como metodología de desarrollo.</p><ul><li>Control de calidad de software</li><li>Desarrollo de tests automatizados con Java y Selenium</li><li>Gestión de tareas con Github</li><li>Metodología Scrum</li><li>Trabajo en equipo</li></ul><p>Tecnologías aprendidas: Cypress, Jmeter, Appium y Selenium.</p>',
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
  ngOnInit(): void {
    this.seo.title.setTitle(this.title);
    this.seo.setCanonicalURL(environment.BASE_URL);
    this.seo.addPreloadImage('/assets/images/retrato-min.webp');
    this.seo.setIndexFollow(true);
    this.seo.meta.updateTag({ name: 'description', content: this.description });
    this.seo.meta.updateTag({ name: 'apple-mobile-web-app-title', content: environment.APP_NAME });
    this.seo.meta.updateTag({ name: 'application-name', content: environment.APP_NAME });
    this.seo.meta.updateTag({ property: 'twitter:title', content: this.title });
    this.seo.meta.updateTag({ property: 'twitter:description', content: this.description });
    this.seo.meta.updateTag({ property: 'twitter:url', content: environment.BASE_URL });
    this.seo.meta.updateTag({ name: 'twitter:image', content: this.page_image_url });
    this.seo.meta.updateTag({ property: 'og:type', content: 'website' });
    this.seo.meta.updateTag({ property: 'og:site_name', content: environment.APP_NAME });
    this.seo.meta.updateTag({ property: 'og:title', content: this.title });
    this.seo.meta.updateTag({ property: 'og:description', content: this.description });
    this.seo.meta.updateTag({ name: 'og:image', content: this.page_image_url });
    this.seo.meta.updateTag({ property: 'og:url', content: environment.BASE_URL });

  }

  emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const email = control.value;
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email && !pattern.test(email)) {
      return { invalidEmail: true };
    }

    return null;
  }

  async onSubmit(): Promise<void> {
    this.submited = true;
    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    emailjs.init('T9GCaCcJtOv0DqMFT');

    let response = await emailjs.send('service_uzu2m04', 'template_ss4qu9k', {
      to_name: 'Ricardo',
      from_name: this.form.get('name')!.value,
      from_email: this.form.get('email')!.value,
      subject: this.form.get('subject')!.value,
      message: this.form.get('message')!.value,
    });

    this.form.reset();
    this.submited = false;
    this.loading = false;

    if (response.status == 200) {
      this.successSubmit = true;
    }
  }
}
