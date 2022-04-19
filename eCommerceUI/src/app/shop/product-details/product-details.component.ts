import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-detailss',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product!: IProduct;

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    let param = parseInt(this.activatedRoute.snapshot.paramMap.get('id') ?? "0");
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    this.shopService.getProduct(param).subscribe(product => {
      this.product = product;
    }, error => {
      console.log(error);
    })
  }

}
