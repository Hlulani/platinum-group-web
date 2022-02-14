import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-construction-brochure',
  templateUrl: './construction-brochure.component.html',
  styleUrls: ['./construction-brochure.component.scss']
})
export class ConstructionBrochureComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  // brochreBtnClick() {
  //   this.router.navigateByUrl('/con-brochure');
  // };
}
