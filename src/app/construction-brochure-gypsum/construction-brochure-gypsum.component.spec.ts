import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionBrochureGypsumComponent } from './construction-brochure-gypsum.component';

describe('ConstructionBrochureThreeComponent', () => {
  let component: ConstructionBrochureGypsumComponent;
  let fixture: ComponentFixture<ConstructionBrochureGypsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionBrochureGypsumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionBrochureGypsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
