import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./component/login/login.component";
import { HomeComponent } from "./component/home/home.component";
import { CatalogProductsComponent } from "./pages/products/catalog-products.component";
import { CatalogCategoriesComponent } from "./pages/categories/catalog-categories.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "rush",
    component: HomeComponent,
    children: [
      {
        path: "products",
        component: CatalogProductsComponent,
      },
      {
        path: "categories",
        component: CatalogCategoriesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
