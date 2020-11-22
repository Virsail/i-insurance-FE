import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterkComponent } from './footerk.component';

describe('FooterkComponent', () => {
  let component: FooterkComponent;
  let fixture: ComponentFixture<FooterkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
