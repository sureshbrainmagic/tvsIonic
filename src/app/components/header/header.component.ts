import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  lsOperator: any;
  @Input() heading: boolean = false;
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
