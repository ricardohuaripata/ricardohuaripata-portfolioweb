import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-project-page',
    standalone: true,
    templateUrl: './project-page.component.html',
    styleUrl: './project-page.component.scss',
    imports: [CommonModule, FooterComponent]
})
export class ProjectPageComponent implements OnInit {
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('project');

    this.projectService.getProjectById(projectId!).subscribe((project) => {
      this.project = project;
    });
  }
}
