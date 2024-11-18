import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  currentLanguage: string = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  switchLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'pl' : 'en';
    this.translate.use(this.currentLanguage);
  }
}
