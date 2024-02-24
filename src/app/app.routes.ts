import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Ricardo Huaripata 👨‍💻 | Full Stack Developer',
  },
  {
    path: 'projects/:project',
    component: ProjectPageComponent,
    title: 'Ricardo Huaripata 👨‍💻 | Proyecto de desarrollo',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];
