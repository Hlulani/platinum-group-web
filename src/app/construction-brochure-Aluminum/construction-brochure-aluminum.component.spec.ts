import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionBrochureAluminumComponent } from './construction-brochure-aluminum.component';

describe('ConstructionBrochureTwoComponent', () => {
  let component: ConstructionBrochureAluminumComponent;
  let fixture: ComponentFixture<ConstructionBrochureAluminumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionBrochureAluminumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionBrochureAluminumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
