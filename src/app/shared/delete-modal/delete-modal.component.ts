import { Component } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { ProductService } from "src/app/services/product-service";
import { Router } from "@angular/router";

@Component({
  selector: "delete-modal",
  templateUrl: "./delete-modal.component.html",
})
export class DeleteModalComponent {
  constructor(
    private modalRef: BsModalRef,
    private router: Router,
    private productService: ProductService
  ) {}

  public delete(id: string) {
    this.productService.deleteProduct(id).subscribe((response) => {
      this.modalRef.hide();
      this.router.navigate(["rush/products"]);
    });
  }

  public closeModal() {
    this.modalRef.hide();
  }
}
