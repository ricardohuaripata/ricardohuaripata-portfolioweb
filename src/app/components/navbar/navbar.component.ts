import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
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
