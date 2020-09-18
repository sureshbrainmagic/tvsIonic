import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ErrormsgService } from 'src/app/services/errormsg/errormsg.service';
import { ConfigService } from 'src/app/services/config/config.service';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  validationsForm: FormGroup;
  public showPassword: boolean = true;

  constructor(
    public formBuilder: FormBuilder,
    public errorMsg: ErrormsgService,
    private config: ConfigService,
    private loader: LoaderService,
    private toast: ToastService,
    private router: Router
  ) { }

  ngOnInit() {
    this.validationsForm = this.formBuilder.group({
      employeeCode: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      password: new FormControl('', Validators.compose([
        // Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(values) {
    this.loader.present(`Please Wait ... `);
    const bodyValues = {
      "operator_emp_code": values.employeeCode,
      "Password": values.password
    };
    this.config.postData('login_in', bodyValues).subscribe(res => {
      console.log(res);
      const response: any = res;
      if (response.is_success) {
        localStorage.setItem('token', 'true');
        localStorage.setItem('lsOperator', JSON.stringify(response.operator));
        this.toast.toastFn(`${response.messages}`);
        // this.router.navigateByUrl('/home');
        this.router.navigate(['home']);
      } else {
        // alert('else');
        this.toast.toastFn(`${response.messages}`);
      }
      this.loader.dismiss();
    }, error => {
      this.loader.dismiss();
      console.log(error);
      this.toast.toastFn(`${error.error.messages}`);
    });

  }

  testLogin() {
    localStorage.setItem('token', 'true');

    const lsOperator = {
      "id": 1,
      "operator_emp_code": "00001",
      "operator_emp_name": "suresh",
      "Password": "123456",
      "emailID": "suresh@brainmagic.info",
      "created_at": "2020-09-08T00:00:00.000Z",
      "updated_at": "2020-09-08T00:00:00.000Z"
    };

    localStorage.setItem('lsOperator', JSON.stringify(lsOperator));

    this.router.navigate(['home']);
  }

}
