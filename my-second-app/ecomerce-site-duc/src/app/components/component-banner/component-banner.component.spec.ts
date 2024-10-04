import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBannerComponent } from './component-banner.component';

describe('ComponentBannerComponent', () => {
  let component: ComponentBannerComponent;
  let fixture: ComponentFixture<ComponentBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
