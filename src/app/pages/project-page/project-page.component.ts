import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-project-page',
  standalone: true,
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
  imports: [CommonModule, FooterComponent],
})
export class ProjectPageComponent {
  project: Project;

  constructor(private route: ActivatedRoute) {
    this.project = this.route.snapshot.data['project'];
  }
}
