import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModalModule } from "ngx-bootstrap/modal";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DeleteModalComponent } from "./delete-modal.component";

@NgModule({
  declarations: [DeleteModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    ModalModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  exports: [DeleteModalComponent],
})
export class DeleteModule {}
