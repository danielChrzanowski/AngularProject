import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyslKompComponent } from './mysl-komp.component';

describe('MyslKompComponent', () => {
  let component: MyslKompComponent;
  let fixture: ComponentFixture<MyslKompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyslKompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyslKompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
