import { Component, ElementRef, ViewChild } from '@angular/core';
import { SeoServiceService } from '../seo-service.service';
import { UtilsService } from '../utils.service';
@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent {
  @ViewChild('form', { static: false }) form: any;

  encRequest: string;
  accessCode: string;

  constructor(private utils: UtilsService, private seoSvc: SeoServiceService, public objUtils: UtilsService) {
    this.accessCode = 'AVQR75FA88CK38RQKC';
    this.encRequest =
      '7ec70e79d99fac49e1645b7a8480aeb73d2182f0a8f9266e875a949d4a2a33e62ebef84371721a0f3f8b9ad7522858c9680b518304169a2dddbe8f06602b9957a84862ef27bff93a956a4da4fd2763abb3b3a2066795255d0972ef7d8f1f711374201e6623dd4b374683206eda46326d3052814fa6afe90cc76f6d90e2c5b693b3dab2b5342e05fb4b3b60d6e8d36561';

    // '7ec70e79d99fac49e1645b7a8480aeb763631da1f91a6aae86690c040c1fa62f89852837a9dfd5bf6de483f843331342417a6a905d8bad84cfeec4dba533d36a6be50ae3d46c5413c0966da442c566841db5761690e40acab04d88e083c5a5e389e68b84e7233003ae70a166c46ce49f9b1437e9ba0b340afa0c96dabf838fd1c5419e85806e00d1c7798b96bca2c02630654eb6203904fefdec1d91a7f6d527667a704d6f333c4e8d345a72dbc94889'

    // { "merchant_id": "164513", "order_id": "1645135321", "currency": "INR", "amount": "1200.00", "redirect_url": "http://uat.ngrane.kelltontech.net", "cancel_url": "http://uat.ngrane.kelltontech.net", "language": "EN" }

    this.utils.getSubCatDataByGuid().subscribe({
      next: (data: any) => {
        console.log(data);
        this.objUtils.metaInfoObj.pageTitle = data.pageTitle;
        this.objUtils.metaInfoObj.author = data.author;
        this.objUtils.metaInfoObj.description = data.description;
        this.seoSvc.updateMetaTags(this.objUtils.metaInfoObj);
      }
    })
  }

  pay() {

    // 'merchant_id=164513&order_id=1645135321&amount=1200.00&currency=INR&language=EN&redirect_url=http://uat.ngrane.kelltontech.net&cancel_url=http://uat.ngrane.kelltontech.net'
    // window.urlencode(merchant_id = 123456789 & order_id=xxxxxxxx & amount=1.00 & currency=INR & language=EN & billing_name=gfghghfhgfgh & billing_address=abc & billing_city=abc)
    this.form.nativeElement.submit();
  }

}


// Request: {
//   order_id: 123456,
//     currency: 'INR',
//       amount: '200',
//         redirect_url: 'http%3A%2F%2Fuat.ngrane.kelltontech.net%2F',
//           billing_name: 'Ankur Pathak'
// }
// encrypted string:
// 7ec70e79d99fac49e1645b7a8480aeb73d2182f0a8f9266e875a949d4a2a33e62ebef84371721a0f3f8b9ad7522858c9680b518304169a2dddbe8f06602b9957a84862ef27bff93a956a4da4fd2763abb3b3a2066795255d0972ef7d8f1f711374201e6623dd4b374683206eda46326d3052814fa6afe90cc76f6d90e2c5b693b3dab2b5342e05fb4b3b60d6e8d36561




// ==================================
// Request: { reference_no: 103001198924, amount: '12500.00' }
// encrypted string:
// 7ec70e79d99fac49e1645b7a8480aeb7130695f3822f79fe00b96edfe806f6990c57a220ef41aea9936ba89c4b659dcfaefb62af41714c643f936f8653909473


// ===================================

// Request: { reference_no: '103001198924', amount: '12500.00' }
// encrypted string:
// 7ec70e79d99fac49e1645b7a8480aeb7130695f3822f79fe00b96edfe806f6990c57a220ef41aea9936ba89c4b659dcfaefb62af41714c643f936f8653909473