import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartCards: Products[] = [];
  cartsQuantity: number[] = [];
  totallPrice: number = 0;
  pagginattionSkip: number = 0;

  apiHttp: string = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}

  searchInput(search: string) {
    return this.http.get(`https://dummyjson.com/products/search?q=${search}`);
  }
  optionInput(option: string) {
    return this.http.get(`https://dummyjson.com/products/category/${option}`);
  }

  getAllProduct(skip: number = 0): Observable<any> {
    return this.http.get(
      `https://dummyjson.com/products?limit=10&skip=${skip}`
    );
  }

  getProductById(id: number | string) {
    return this.http.get(`${this.apiHttp}/${id}`);
  }

  insertCard(card: Products) {
    if (this.cartCards.filter((x) => x.id == card.id).length == 0) {
      this.cartCards.push(card);
      this.cartsQuantity.push(0);
    } else {
      ++this.cartsQuantity[this.cartCards.findIndex((x) => x.id == card.id)];
    }
    this.totalPrice(card.price);
  }

  removeCard(card: Products, index: number) {
    this.cartCards = this.cartCards.filter((x) => x.id != card.id);
  }

  totalPrice(price: number) {
    this.totallPrice += price;
  }
  removePrice(price: number) {
    this.totallPrice -= price;
  }
}
