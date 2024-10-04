import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentVideoPlayerComponent } from './component-video-player.component';

describe('ComponentVideoPlayerComponent', () => {
  let component: ComponentVideoPlayerComponent;
  let fixture: ComponentFixture<ComponentVideoPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentVideoPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
