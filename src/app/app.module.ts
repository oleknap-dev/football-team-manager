import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PlayerDetailsModule } from './feature-modules/player-details/player-details.module';

import { I18N_CONFIG } from './config/translations.config';
import { AppComponent } from './app.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './feature-modules/dashboard/dashboard.module';
import { SquadBuilderModule } from './feature-modules/squad-builder/squad-builder.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    HttpClientModule,
    TranslateModule.forRoot(I18N_CONFIG),
    BrowserAnimationsModule,
    AppRoutingModule,
    PlayerDetailsModule,
    DashboardModule,
    SquadBuilderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
