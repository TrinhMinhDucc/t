import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentVideoSearchListComponent } from './component-video-search-list.component';

describe('ComponentVideoDetailComponent', () => {
  let component: ComponentVideoSearchListComponent;
  let fixture: ComponentFixture<ComponentVideoSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentVideoSearchListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentVideoSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
