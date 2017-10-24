import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import { NgxChartsModule } from "@swimlane/ngx-charts/release/ngx-charts.module";

@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
		NgxChartsModule
  ],
	exports:[
		AboutPage
	]
})
export class AboutPageModule {}
