import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-construction-brochure-aluminum',
  templateUrl: './construction-brochure-aluminum.component.html',
  styleUrls: ['./construction-brochure-aluminum.component.scss']
})
export class ConstructionBrochureAluminumComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  brochureAlluminiumBtnClick() {
    this.router.navigateByUrl('/aluminum');
  };
}
