import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { CatalogCategoriesComponent } from "./catalog-categories.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ModalModule } from "ngx-bootstrap/modal";
import { CategoryModalComponent } from "./category-modal/category-modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [CatalogCategoriesComponent, CategoryModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgxDatatableModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CatalogCategoriesComponent],
  providers: [],
  entryComponents: [CategoryModalComponent],
})
export class CategoriesModule {}
