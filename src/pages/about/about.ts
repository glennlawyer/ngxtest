import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	single: any[] = [  {
    "name": "Germany",
    "value": 8940000
  },  {
    "name": "USA",
    "value": 5000000
  },  {
    "name": "France",
    "value": 7200000
  }];

	view: any[] = [700, 400];

	showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(public navCtrl: NavController) {

  }

}
