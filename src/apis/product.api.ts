import { IProductParams, IProducts } from "../types/product.type";
import { httpClient } from "./client";
import { urls } from "./urls";

type getProductsType = (_: IProductParams) => Promise<IProducts[]>;
export const getProducts: getProductsType = async (params) => {
  const client = httpClient();
  const response = await client.get(urls.productList, {
    params: { limit: params.limit, skip: params.skip },
  });
  console.log(response.data.products);

  return response.data.products;
};
