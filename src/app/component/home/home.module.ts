import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { MatSidenavModule } from "@angular/material";
import { ProductsModule } from "src/app/pages/products/products.module";
import { CategoriesModule } from "src/app/pages/categories/categories.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    ProductsModule,
    CategoriesModule,
  ],
  exports: [HomeComponent],
  entryComponents: [],
})
export class HomeModule {}
