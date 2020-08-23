import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
export const usersApiBaseUrl = "environment.serverUrl";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public getProducts(restauranID: string, page, peerPage) {
    let params = new HttpParams()
      .set("page", page)
      .set("peerPage", peerPage)
      .set("pagination", "false");

    return this.http.get(
      usersApiBaseUrl + "/rush/restaurante/" + restauranID + "/platillos/",
      { params }
    );
  }

  public deleteProduct(dishID: string) {
    return this.http.delete(usersApiBaseUrl + "/rush/platillos/" + dishID);
  }

  public createProduct(dishImageMax, dishImageMin, Poductform) {
    const formData = new FormData();
    // formData.append(
    //     "dish",
    //     new Blob(
    //         [
    //             JSON.stringify({
    //                 name: dishform.name,
    //                 description: dishform.description,
    //                 price: dishform.price
    //             })
    //         ],
    //         {
    //             type: "application/json"
    //         }
    //     )
    // );

    // if (dishImageMin ) {
    //     formData.append("coverPage", dishImageMin );
    // }
    // if (dishImageMax ) {
    //     formData.append("dishImageMax ", dishImageMax );
    // }
    return this.http.post(usersApiBaseUrl + "/rush/platillos", formData);
  }

  public EditPoduct(dishID: string, coverPage: File, productform) {
    const formData = new FormData();
    // formData.append(
    //     "dish",
    //     new Blob(
    //         [
    //             JSON.stringify({
    //                 name: dishform.name,
    //                 description: dishform.description,
    //                 price: dishform.price
    //             })
    //         ],
    //         {
    //             type: "application/json"
    //         }
    //     )
    // );

    if (coverPage) {
      formData.append("coverPage", coverPage);
    }
    return this.http.put(
      usersApiBaseUrl + "/rush/platillos" + dishID,
      formData
    );
  }
}
