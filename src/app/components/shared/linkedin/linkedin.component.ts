import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-linkedin',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './linkedin.component.html',
})
export class LinkedinComponent {
  @Input() smallSize!: boolean;
}
