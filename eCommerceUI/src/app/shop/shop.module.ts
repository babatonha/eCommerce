import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PagerComponent } from '../shared/components/pager/pager.component';
import { SharedModule } from '../shared/shared.module';
import { PagingHeaderComponent } from '../shared/components/paging-header/paging-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopRoutingModule } from './shop-routing.module';


@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    PagerComponent,
    PagingHeaderComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule
  ],
  exports:[
    ShopComponent,
     PagerComponent
  ]
})
export class ShopModule { }
