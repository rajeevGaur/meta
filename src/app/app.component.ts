import { Component } from '@angular/core';
import { SeoServiceService } from './seo-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ssr-test';

  constructor(private seoSvc: SeoServiceService) {
    // let seoData: any = {
    //   metaTitle: 'Rishabh',
    //   metaDescription: 'Rishabh'
    // };


    // this.seoSvc.setData(seoData);
  }


}
