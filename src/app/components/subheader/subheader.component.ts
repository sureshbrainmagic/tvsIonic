import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
})
export class SubheaderComponent implements OnInit {

  lsOperator: any;
  @Input() heading: string;
  @Input() url: string = 'home';
  @Input() isHideShowBachBtn: boolean = false;
  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.lsOperator = JSON.parse(localStorage.getItem('lsOperator'));
  }

  goToHome() {
    // this.router.navigate(['home']);
    // this.router.navigateByUrl(this.url);
    // if (this.url === 'home') {
    //   this.router.navigate(['home']);
    // } else {
    //   this.location.back();
    // }
    this.location.back();
  }


}
