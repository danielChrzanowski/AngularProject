import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StronaPierwszaComponent } from './strona-pierwsza.component';

describe('StronaPierwszaComponent', () => {
  let component: StronaPierwszaComponent;
  let fixture: ComponentFixture<StronaPierwszaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StronaPierwszaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StronaPierwszaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
