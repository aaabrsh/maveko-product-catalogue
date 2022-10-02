export interface Product {
  id: number;
  name: string;
  description:string;
  image:string;
  tag:string;
}

export function createProduct(params: Partial<Product>) {
  return {

  } as Product;
}
