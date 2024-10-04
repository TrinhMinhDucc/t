import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentProductsDetailComponent } from './component-products-detail.component';

describe('ComponentProductsDetailComponent', () => {
  let component: ComponentProductsDetailComponent;
  let fixture: ComponentFixture<ComponentProductsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentProductsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentProductsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
