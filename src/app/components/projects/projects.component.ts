import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[];

  constructor(private route: ActivatedRoute) {
    this.projects = this.route.snapshot.data['projects'];
  }
}
