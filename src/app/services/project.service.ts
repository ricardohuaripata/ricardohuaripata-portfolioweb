import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private proyectosUrl = 'assets/projects.json';

  constructor(private http: HttpClient) {}

  getProjectById(id: string): Observable<Project | undefined> {
    return this.http
      .get<Project[]>(this.proyectosUrl)
      .pipe(
        map((projects: Project[]) =>
          projects.find((project) => project.id === id)
        )
      );
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.proyectosUrl);
  }
}
