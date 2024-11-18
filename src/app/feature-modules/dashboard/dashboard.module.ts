import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent],
  imports: [TranslateModule, RouterLink],
})
export class DashboardModule {}
