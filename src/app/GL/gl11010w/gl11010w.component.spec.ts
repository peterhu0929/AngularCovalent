import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gl11010wComponent } from './gl11010w.component';

describe('Gl11010wComponent', () => {
  let component: Gl11010wComponent;
  let fixture: ComponentFixture<Gl11010wComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gl11010wComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gl11010wComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
