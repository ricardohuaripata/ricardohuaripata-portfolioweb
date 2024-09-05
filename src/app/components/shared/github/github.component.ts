import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [],
  templateUrl: './github.component.html',
})
export class GithubComponent {
  @Input() href!: string;
  @Input() title!: string;
  @Input() smallSize!: boolean;

}
