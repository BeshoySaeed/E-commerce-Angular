import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Products } from '../../interfaces/products';

interface card {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.scss'],
})
export class ProjectDataComponent {
  cardId: number = 0;
  ourCard!: any;
  constructor(
    private activatedRouter: ActivatedRoute,
    private productsService: ProductService,
    private rout: Router
  ) {}

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe((paramMap) => {
      this.cardId = Number(paramMap.get('id'));

      this.productsService
        .getProductById(this.cardId)
        .subscribe((prod) => (this.ourCard = prod));
    });
  }

  addCart(card: Products) {
    if (localStorage.getItem('token')) {
      this.productsService.insertCard(card);
    } else {
      alert('please login first');
      this.rout.navigate(['login']);
    }
  }
}
