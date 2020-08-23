import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { ProductModalComponent } from "./product-modal/product-modal.component";
import { ProductService } from "src/app/services/product-service";
import { ProductDTO } from "src/app/constants/model/product";
import { DeleteModalComponent } from "src/app/shared/delete-modal/delete-modal.component";

@Component({
  selector: "app-catalog-products",
  templateUrl: "./catalog-products.component.html",
  styleUrls: ["./catalog-products.component.scss"],
})
export class CatalogProductsComponent implements OnInit {
  public rows;
  public isLoadingTable: boolean;
  columns;
  @ViewChild("cellOptionsTmpl", { static: true }) cellOptionsTmpl: TemplateRef<
    any
  >;
  constructor(
    private modalService: BsModalService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.setRows();
    this.rows = [
      { id: 1, name: "Austin", price: 123, category: "Swimlane" },
      { id: 1, name: "Dany", price: 125, category: "KFC" },
      { id: 1, name: "Molly", price: 300, category: "Burger King" },
    ];
    // this.getAllProducts()
  }

  public setRows(): void {
    this.columns = [
      { name: "ID", prop: "id" },
      { name: "Nombre", prop: "name" },
      { name: "Precio", prop: "price" },
      { name: "Categoria", prop: "category" },
      { name: "Opciones", cellTemplate: this.cellOptionsTmpl, width: 200 },
    ];
  }

  public getAllProducts() {
    this.isLoadingTable = true;
    this,
      this.productService.getProducts("1", null, null).subscribe(
        (response) => {
          this.isLoadingTable = false;
          this.rows = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  public openCreateProductModal() {
    const modal = this.modalService.show(ProductModalComponent, {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: true,
      class: "modal-md",
    });
    modal.content.title = "Registrar producto";
    modal.content.isEditModal = false;
  }

  public editProduct(product: ProductDTO) {
    const modal = this.modalService.show(ProductModalComponent, {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: true,
      class: "modal-md",
    });
    modal.content.title = "Edith producto";
    modal.content.product = product;
    modal.content.isEditModal = true;
  }

  public deleteProduct(productId: string) {
    const modal = this.modalService.show(DeleteModalComponent, {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: true,
      class: "modal-md",
    });
    modal.content.productId = productId;
  }
}
