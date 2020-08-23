export class ProductDTO {
  creationDate: string;
  description: string;
  dishID: string;
  dishImageMax: string;
  dishImageMin: string;
  modificationDate: string;
  name: string;
  price: number;
  rate: number;
  status: ProductStatus;
}

export enum ProductStatus {
  APPROVED = "APPROVED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}
