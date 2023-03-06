import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  constructor(private service: ApiService) {}
  model: any = {};
  @Input() selectedProd: any;
  @Input() isAddProduct: boolean = false;
  @Output() goBackPlp = new EventEmitter<boolean>();
  ngOnInit(): void {}

  ngOnChanges(): void {
    this.model.pName = this.selectedProd.title;
    this.model.pPrice = this.selectedProd.price;
    this.model.pDescription = this.selectedProd.description;
    this.model.pImage = this.selectedProd.image;
    this.model.pCategory = this.selectedProd.category;
  }

  ngOnDestroy(): void {
    this.selectedProd = undefined;
  }

  addProduct(): void {
    // API call
    this.service
      .addNewProduct(
        this.model.pName,
        this.model.pPrice,
        this.model.pDescription,
        this.model.pImage,
        this.model.pCategory
      )
      .subscribe(
        (res: any) => {
          this.model.pName = '';
          this.model.pPrice = '';
          this.model.pDescription = '';
          this.model.pImage = '';
          this.model.pCategory = '';
          this.isAddProduct = false;
          this.goBackPlp.emit(false);
        },
        (error: any) => {}
      );
  }
}
