import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config/config.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-todayallocatedtest',
  templateUrl: './todayallocatedtest.page.html',
  styleUrls: ['./todayallocatedtest.page.scss'],
})
export class TodayallocatedtestPage implements OnInit {

  taskJson: any = [];
  searchTerm;
  constructor(
    private config: ConfigService,
    private loader: LoaderService
  ) { }

  ngOnInit() {
    const lsOperator = JSON.parse(localStorage.getItem('lsOperator'));
    this.getOperatorTask(lsOperator.operator_emp_code);
  }

  getOperatorTask(empCode) {
    this.loader.present(`Please Wait ....`);

    const values = {
      "operator_emp_code" : empCode
    };
    console.log(values);
    this.config.postData(`getTask`, values).subscribe(res => {
      console.log(res);
      const response: any = res;
      if (response.is_success) {
        this.taskJson = response.data;
        console.log(this.taskJson);
        this.loader.dismiss();
      } else if (response.is_success === false) {
        this.loader.dismiss();
      }
      this.loader.dismiss();
    }, error => {
      console.log(error);
      this.loader.dismiss();
    });

  }

}
