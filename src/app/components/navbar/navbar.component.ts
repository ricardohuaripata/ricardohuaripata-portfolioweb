import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  lang?: string;
  constructor(private translateService: TranslateService) {
    this.lang = translateService.getDefaultLang();
  }
  changeLanguage(newLang: string) {
    this.lang = newLang;
    this.translateService.use(newLang);
  }
}
