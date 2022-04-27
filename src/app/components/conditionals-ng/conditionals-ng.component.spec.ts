import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalsNgComponent } from './conditionals-ng.component';

describe('ConditionalsNgComponent', () => {
  let component: ConditionalsNgComponent;
  let fixture: ComponentFixture<ConditionalsNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalsNgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalsNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
