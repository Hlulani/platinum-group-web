import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionBrochureThreeComponent } from './construction-brochure-three.component';

describe('ConstructionBrochureThreeComponent', () => {
  let component: ConstructionBrochureThreeComponent;
  let fixture: ComponentFixture<ConstructionBrochureThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionBrochureThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionBrochureThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
