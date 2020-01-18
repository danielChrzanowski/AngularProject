import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StronaDrugaComponent } from './strona-druga.component';

describe('StronaDrugaComponent', () => {
  let component: StronaDrugaComponent;
  let fixture: ComponentFixture<StronaDrugaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StronaDrugaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StronaDrugaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
