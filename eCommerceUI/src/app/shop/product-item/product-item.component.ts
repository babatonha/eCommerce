import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: IProduct;
  constructor(private router: Router, private basketService: BasketService)  { }

  ngOnInit() {
  }

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product);
  }
  
  navigateToDetail(){
    let url = "/shop/"+ this.product.id;
    this.router.navigate([url]);
  }

}
