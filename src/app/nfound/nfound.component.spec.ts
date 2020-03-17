import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NFoundComponent } from './nfound.component';

describe('NFoundComponent', () => {
  let component: NFoundComponent;
  let fixture: ComponentFixture<NFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
