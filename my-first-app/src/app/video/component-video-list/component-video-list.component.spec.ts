import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentVideoListComponent } from './component-video-list.component';

describe('ComponentVideoListComponent', () => {
  let component: ComponentVideoListComponent;
  let fixture: ComponentFixture<ComponentVideoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentVideoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
