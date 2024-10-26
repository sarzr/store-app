import { IProducts } from "../types/product.type";
import { httpClient } from "./client";
import { urls } from "./urls";

type getProductsType = () => Promise<IProducts[]>;
export const getProducts: getProductsType = async () => {
  const client = httpClient();
  const response = await client.get(urls.productList);
  console.log(response.data.products);

  return response.data.products;
};
