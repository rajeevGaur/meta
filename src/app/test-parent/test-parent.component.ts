import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.css']
})
export class TestParentComponent {
encToken:string;
  constructor(private router: Router, private utils: UtilsService) { }

  childSet() {
    // this.utils.getSubCatDataByGuid().subscribe({
    //   next: (data: any) => {
    //     console.log(data);
    //     this.router.navigate(['child']);
    //   }
    // })

    this.router.navigate(['child']);

    this.utils.metaInfoObj = {
      "author": "aut test",
      "description": "desc test",
      "keywords": "solar inverter for home, solar ups, hybrid solar inverter, solar inverter price in india, solar inverter price for home, solar power inverter, solar ups for home, solar inverter india, solar ups inverter, solar panel inverter price, solar power inverter for home, what is a solar inverter, hybrid solar inverter india, solar panel and inverter, solar panel inverter for home, buy solar inverter",
      "ogDescription": "<ul><li>desc test</li><li>test</li><li>test</li><li>test</li></ul>",
      "ogImageURL": "url test",
      "ogTitle": "title test",
      "pageTitle": "page title test",
      "robots": "noindex,nofollow",
      metaTitle: 'Rishabh',
      metaDescription: 'Rishabh'
    }
  }

}
