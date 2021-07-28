import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatFormComponent } from './plat-form.component';

describe('PlatFormComponent', () => {
  let component: PlatFormComponent;
  let fixture: ComponentFixture<PlatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
