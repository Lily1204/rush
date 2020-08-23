import { Component, AfterViewInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-product-modal",
  templateUrl: "./product-modal.component.html",
  styleUrls: ["./product-modal.component.scss"],
})
export class ProductModalComponent implements AfterViewInit {
  title: string;
  productForm: FormGroup;
  product: any;

  constructor(private modalRef: BsModalRef, public fb: FormBuilder) {
    this.productForm = this.fb.group({
      imagePurl: [""],
      name: [""],
      price: [],
      category: [""],
      description: [""],
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log(this.product);
      if (this.product) {
        this.productForm.get("name").setValue(this.product.name);
        this.productForm.get("category").setValue(this.product.category);
        this.productForm.get("price").setValue(this.product.price);
      }
    });
  }

  public closeModal() {
    this.modalRef.hide();
  }

  public createProduct() {}

  save(isEdith: boolean) {}
}
