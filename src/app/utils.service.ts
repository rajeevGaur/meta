import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  metaInfoObj: any = {
    "author": "",
    "description": "",
    "pageTitle": ''
  };

  constructor(private http: HttpClient) { }

  getSubCatDataByGuid(): Observable<any> {
    let data: any = { "guid": "0990713f-1cf8-4bc4-8be9-b6b650f15e3a", "metaInfoType": "BrandSubCategory" }
    let url = environment.apiUrl + 'LandingPage/GetMetaInformation';
    return this.http.post(url, data);
  }
}
