import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../apis/product.api";

const useGetProducts = (limit?: number, page?: number) => {
  const getProductList = useQuery({
    queryKey: ["get-products", page],
    queryFn: async () => {
      const res = await getProducts(
        limit && page
          ? { limit: limit, skip: page * limit - limit }
          : { limit: 1000, skip: 1 * 1000 - 1000 }
      );
      return res;
    },
    refetchOnWindowFocus: false,
    retry: 1,
    // keepPreviousData: true,
  });
  return getProductList;
};

export default useGetProducts;
