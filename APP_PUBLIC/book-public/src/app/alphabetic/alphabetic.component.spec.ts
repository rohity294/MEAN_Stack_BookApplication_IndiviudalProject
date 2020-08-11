import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabeticComponent } from './alphabetic.component';

describe('AlphabeticComponent', () => {
  let component: AlphabeticComponent;
  let fixture: ComponentFixture<AlphabeticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabeticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
