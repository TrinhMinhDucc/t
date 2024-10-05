import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

interface Product {
  code: string;
  name: string;
  category: string;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [TableModule, CommonModule],
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
  }
}
