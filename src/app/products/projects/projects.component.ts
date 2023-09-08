import { Component, SimpleChange } from '@angular/core';
import { Products } from '../../interfaces/products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  cardsData!: any[];
  select: string = 'All';
  inputValue: string = '';
  pagginationColor: number = 0;
  constructor(private httpService: ProductService) {}

  ngOnInit() {
    this.httpService.pagginattionSkip = 0;

    this.httpService
      .getAllProduct(this.httpService.pagginattionSkip)
      .subscribe((data) => {
        this.cardsData = data.products;
      });
  }

  pagginationPage(nP: number) {
    this.pagginationColor = nP;
    this.httpService.pagginattionSkip = nP;
    this.httpService
      .getAllProduct(this.httpService.pagginattionSkip)
      .subscribe((data) => {
        this.cardsData = data.products;
      });
  }

  onChangeFunction(search: string) {
    this.httpService
      .searchInput(search)
      .subscribe((data: any) => (this.cardsData = data.products));
    console.log(search);
  }

  onOptionChange(optionValue: string) {
    if (optionValue == 'All') {
      this.httpService.getAllProduct().subscribe((data) => {
        this.cardsData = data.products;
      });
    } else {
      this.httpService
        .optionInput(optionValue)
        .subscribe((data: any) => (this.cardsData = data.products));
    }
  }
  track(index: number, card: Products) {
    card.id;
  }
}
