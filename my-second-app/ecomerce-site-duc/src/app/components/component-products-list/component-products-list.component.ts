import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Product } from '../../models/products';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    TableModule,
    CommonModule
    ],
  templateUrl: './component-products-list.component.html',
  styleUrls: ['./component-products-list.component.scss']
})
export class ComponentProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('ngOnInit called');
    this.http.get<Product[]>('assets/db/db.json').subscribe((data) => {
      this.products = data;
      console.log(data);
    });

    // addToCart(product: Product) {
    //   console.log('Sản phẩm được thêm vào giỏ hàng:', product);
    // }
  }
}
