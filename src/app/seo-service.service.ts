import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoServiceService {

  constructor(private title: Title, private meta: Meta) { }
  updateMetaTags(metaData: any) {
    // if (title && title.length) {
    this.title.setTitle(metaData.pageTitle ? metaData.pageTitle : 'Luminouseshop');

    let keys = Object.keys(metaData);
    keys.forEach(element => {
      if (metaData[element]) {
        if (element != 'ogDescription' && element != 'ogTitle' && element != 'ogTitle' && element != 'pageTitle') {
          this.meta.updateTag({ name: element, content: metaData[element] });
        }
        else if (element == 'pageTitle') {
          this.meta.updateTag({ name: 'title', content: metaData[element] });
        }
        else {
          this.meta.updateTag({ property: element, content: metaData[element] });
        }
      }
      else {
        if (element != 'ogDescription' && element != 'ogTitle' && element != 'ogTitle' && element != 'pageTitle') {
          this.meta.removeTag(`name=${element}`);
        }
        else if (element == 'pageTitle') {
          this.meta.removeTag(`name='title'`);
        }
        else {
          this.meta.removeTag(`property=${element}`);
        }
      }
    })
  }
}

