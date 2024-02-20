import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Ricardo Huaripata 👨‍💻 | Full Stack Developer',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
