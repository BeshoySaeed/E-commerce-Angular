import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCartComponent } from './project-cart.component';

describe('ProjectCartComponent', () => {
  let component: ProjectCartComponent;
  let fixture: ComponentFixture<ProjectCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectCartComponent]
    });
    fixture = TestBed.createComponent(ProjectCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
