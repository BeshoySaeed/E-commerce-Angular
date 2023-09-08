import { Component } from '@angular/core';
import { Products } from '../../interfaces/products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-project-cart',
  templateUrl: './project-cart.component.html',
  styleUrls: ['./project-cart.component.scss'],
})
export class ProjectCartComponent {
  cartCards: Products[] = [];
  quantity: number[] = [];
  totalPrice: number = this.productsService.totallPrice;

  constructor(private productsService: ProductService) {}

  ngOnInit() {
    this.cartCards = this.productsService.cartCards;
    this.quantity = this.productsService.cartsQuantity;
  }

  removeIt(card: Products, i: number) {
    this.productsService.removeCard(card, i);
    this.cartCards = this.cartCards.filter((x) => x.id != card.id);
    this.totalPrice -= card.price * (this.quantity[i] + 1);
    this.quantity[i] = 0;
  }

  increaseQuantity(i: number) {
    if (this.cartCards[i].stock > this.quantity[i]) {
      this.quantity[i] = this.quantity[i] + 1;
      this.totalPrice += this.cartCards[i].price;
    } else {
      alert("sorry we don't have this quantity yet");
    }
  }
  decreaseQuantity(i: number) {
    if (this.quantity[i] >= 1) {
      this.quantity[i] = this.quantity[i] - 1;
      this.totalPrice -= this.cartCards[i].price;
    } else {
      alert(' you can remove it ');
    }
  }

  track(index: number, card: Products) {
    card.id;
  }
}
