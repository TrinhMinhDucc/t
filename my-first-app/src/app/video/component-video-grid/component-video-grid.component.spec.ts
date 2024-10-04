import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentVideoGridComponent } from './component-video-grid.component';

describe('ComponentVideoGridComponent', () => {
  let component: ComponentVideoGridComponent;
  let fixture: ComponentFixture<ComponentVideoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentVideoGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentVideoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
