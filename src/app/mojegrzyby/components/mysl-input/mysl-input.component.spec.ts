import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyslInputComponent } from './mysl-input.component';

describe('MyslInputComponent', () => {
  let component: MyslInputComponent;
  let fixture: ComponentFixture<MyslInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyslInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyslInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
