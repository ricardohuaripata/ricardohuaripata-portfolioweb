import { Component, OnInit, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../interfaces/project';
import { SeoService } from '../../services/seo.service';
import { environment } from '../../../environments/environment.development';
import { TranslateModule } from '@ngx-translate/core';
import { PhotoGalleryComponent } from '../../components/photo-gallery/photo-gallery.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
  imports: [TranslateModule, PhotoGalleryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectPageComponent implements OnInit {
  title: string;
  description: string;
  page_image_url: string;
  routeURL: string;
  seo = inject(SeoService);
  project: Project;

  constructor(private route: ActivatedRoute) {
    this.project = this.route.snapshot.data['project'];
    this.routeURL = environment.BASE_URL + '/' + 'projects/' + this.project.id;
    this.title = 'Ricardo Huaripata | ' + this.project.title;
    this.description = 'Explora uno de mis últimos proyectos desarrollados por mi: ' + this.project.title + '. Descubre todas sus funcionalidades y características y observa un video desmostrativo de la aplicación.';
    this.page_image_url = environment.BASE_URL + '/' + this.project.thumbnail;
  }

  ngOnInit(): void {
    this.seo.title.setTitle(this.title);
    this.seo.setCanonicalURL(this.routeURL);
    this.seo.setIndexFollow(true);
    this.seo.meta.updateTag({ name: 'description', content: this.description });
    this.seo.meta.updateTag({ name: 'apple-mobile-web-app-title', content: environment.APP_NAME });
    this.seo.meta.updateTag({ name: 'application-name', content: environment.APP_NAME });
    this.seo.meta.updateTag({ property: 'twitter:title', content: this.title });
    this.seo.meta.updateTag({ property: 'twitter:description', content: this.description });
    this.seo.meta.updateTag({ property: 'twitter:url', content: this.routeURL });
    this.seo.meta.updateTag({ name: 'twitter:image', content: this.page_image_url });
    this.seo.meta.updateTag({ property: 'og:type', content: 'website' });
    this.seo.meta.updateTag({ property: 'og:site_name', content: environment.APP_NAME });
    this.seo.meta.updateTag({ property: 'og:title', content: this.title });
    this.seo.meta.updateTag({ property: 'og:description', content: this.description });
    this.seo.meta.updateTag({ name: 'og:image', content: this.page_image_url });
    this.seo.meta.updateTag({ property: 'og:url', content: this.routeURL });
  }
}
