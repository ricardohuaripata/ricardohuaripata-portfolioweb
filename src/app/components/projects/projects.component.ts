import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  proyectos: any[] = [];

  constructor(private http: HttpClient) {
    this.loadProjects();
  }

  loadProjects() {
    this.http.get<any[]>('assets/projects.json').subscribe((data) => {
      this.proyectos = data;
    });
  }
}
