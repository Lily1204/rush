import { Component, ViewChild, TemplateRef } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { CategoryModalComponent } from "./category-modal/category-modal.component";

@Component({
  selector: "app-catalog-categories",
  templateUrl: "./catalog-categories.component.html",
  styleUrls: ["./catalog-categories.component.scss"],
})
export class CatalogCategoriesComponent {
  public rows: any[] = [
    { id: 1, name: "Austin" },
    { id: 2, name: "Dany" },
    { id: 3, name: "Molly" },
  ];
  columns;
  loadingTable: boolean;
  @ViewChild("cellOptionsTmpl", { static: true }) cellOptionsTmpl: TemplateRef<
    any
  >;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
    this.setRows();
  }

  public setRows(): void {
    this.columns = [
      { name: "ID", prop: "id" },
      { name: "Nombre", prop: "name" },
      { name: "Opciones", cellTemplate: this.cellOptionsTmpl, width: 200 },
    ];
  }

  public openCreateCategoryModal() {
    const modal = this.modalService.show(CategoryModalComponent, {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: true,
      class: "modal-md modal-dialog-centered",
    });
    modal.content.title = "Registrar Categoria";
  }

  public editCategory(category: any) {
    console.log(category);
    const modal = this.modalService.show(CategoryModalComponent, {
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: true,
      class: "modal-md",
    });
    modal.content.title = "Edith producto";
    modal.content.product = category;
  }

  public deleteCategory(productId: string) {
    console.log(productId);
  }
}
