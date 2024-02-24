import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../interfaces/project';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Project[] = [];
  private subscription: Subscription | undefined;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.subscription = this.projectService
      .getProjects()
      .subscribe((projects) => {
        this.projects = projects;
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
