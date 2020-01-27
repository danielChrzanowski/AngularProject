import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojegrzybyComponent } from './mojegrzyby.component';

describe('MojegrzybyComponent', () => {
  let component: MojegrzybyComponent;
  let fixture: ComponentFixture<MojegrzybyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojegrzybyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojegrzybyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
