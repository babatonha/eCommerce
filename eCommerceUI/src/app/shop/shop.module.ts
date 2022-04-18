import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PagerComponent } from '../shared/pager/pager.component';
import { SharedModule } from '../shared/shared.module';
import { PagingHeaderComponent } from '../shared/paging-header/paging-header.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    PagerComponent,
    PagingHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ShopComponent,
    // ProductItemComponent,
     PagerComponent
  ]
})
export class ShopModule { }
