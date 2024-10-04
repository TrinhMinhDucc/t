import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentProductsListComponent } from './component-products-list.component';

describe('ComponentProductsListComponent', () => {
  let component: ComponentProductsListComponent;
  let fixture: ComponentFixture<ComponentProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentProductsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
