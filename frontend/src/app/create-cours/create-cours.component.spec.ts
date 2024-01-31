import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoursComponent } from './create-cours.component';

describe('CreateCoursComponent', () => {
  let component: CreateCoursComponent;
  let fixture: ComponentFixture<CreateCoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCoursComponent]
    });
    fixture = TestBed.createComponent(CreateCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
