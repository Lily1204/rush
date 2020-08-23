import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CategoryForm } from "../constants/form/category-form";
export const usersApiBaseUrl = "environment.serverUrl";
@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  public getCategoriesByName() {}

  public createCategory(
    restaurantID: string,
    categoryForm: CategoryForm,
    categoryImageMax: File,
    categoryImageMin: File
  ) {
    return this.http.post(usersApiBaseUrl + "/rush/categorias", {
      observe: categoryForm,
    });
  }
}
