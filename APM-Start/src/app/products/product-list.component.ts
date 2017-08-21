import { Component, OnInit } from '@angular/core';
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[];
  _listFilter: string;
  errorMessage: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  products: IProduct[] = [];

  constructor( private _ProductService: ProductService ) {

  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase().trim();
    return this.products.filter((product: IProduct) => {
      return product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    })
  }
  onRatingClicked(message: number): void {
    this.pageTitle = 'Product list: ' + message;
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
}
  ngOnInit(): void{
    this._ProductService.getProducts()
      .subscribe(
        (products) => {
        this.products = products
        this.filteredProducts = this.products
      },
        (error) => this.errorMessage = <any>error
      )
      
  }
}
