import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GithubComponent } from '../shared/github/github.component';
import { LinkedinComponent } from '../shared/linkedin/linkedin.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, TranslateModule, GithubComponent, LinkedinComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private translateService: TranslateService) {}
  changeLanguage(event: Event) {
    const selectValue = (event.target as HTMLSelectElement)?.value;
    this.translateService.use(selectValue);
  }
}
