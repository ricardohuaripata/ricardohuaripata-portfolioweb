import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ActivatedRoute, RouterModule } from '@angular/router';
import { Project } from '../../interfaces/project';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[];

  constructor(private route: ActivatedRoute) {
    this.projects = this.route.snapshot.data['projects'];
  }
}
