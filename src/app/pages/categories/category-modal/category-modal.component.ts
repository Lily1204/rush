import { Component, AfterViewInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-category-modal",
  templateUrl: "./category-modal.component.html",
  styleUrls: ["./category-modal.component.scss"],
})
export class CategoryModalComponent implements AfterViewInit {
  title: string;
  categoryForm: FormGroup;
  category;

  constructor(private modalRef: BsModalRef, public fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      id: [],
      name: [""],
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      console.log(this.category);
      if (this.category) {
        this.categoryForm.get("name").setValue(this.category.name);
      }
    });
  }

  public closeModal() {
    this.modalRef.hide();
  }

  public createCategory() {}
}
