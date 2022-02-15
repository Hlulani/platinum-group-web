import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss']
})
export class ConstructionComponent implements OnInit {

 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  brochureBtnClick() {
    this.router.navigateByUrl('/con-brochure');
  };

  brochureAlluminiumBtnClick() {
    this.router.navigateByUrl('/aluminum');
  };

  brochureGypsumBtnClick() {
    this.router.navigateByUrl('/gypsum');
  };
}
