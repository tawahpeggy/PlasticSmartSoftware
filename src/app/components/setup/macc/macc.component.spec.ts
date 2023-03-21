import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaccComponent } from './macc.component';

describe('MaccComponent', () => {
  let component: MaccComponent;
  let fixture: ComponentFixture<MaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
