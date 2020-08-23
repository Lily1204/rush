import { NgModule } from "@angular/core";
import { CatalogProductsComponent } from "./catalog-products.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ModalModule } from "ngx-bootstrap/modal";
import { ProductModalComponent } from "./product-modal/product-modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductService } from "src/app/services/product-service";
import { DeleteModule } from "src/app/shared/delete-modal/delete.module";
import { DeleteModalComponent } from "src/app/shared/delete-modal/delete-modal.component";

@NgModule({
  declarations: [CatalogProductsComponent, ProductModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgxDatatableModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    DeleteModule,
  ],
  exports: [CatalogProductsComponent],
  providers: [ProductService],
  entryComponents: [ProductModalComponent, DeleteModalComponent],
})
export class ProductsModule {}
