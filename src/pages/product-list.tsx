import React from "react";
import { ProductCard } from "../components/product-card";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../apis/product.api";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { productActions } from "../redux/features/product.slice";
import { filterActions } from "../redux/features/filter.slice";
import { productListLimit } from "../utils/config";
// import { IProducts } from "../types/product.type";

export const ProductList: React.FC = () => {
  const [page, setPage] = React.useState<number>(1);
  // const [product, setProduct] = React.useState<IProducts[]>([]);

  const dispatch = useAppDispatch();

  const getFilters = useAppSelector((state) => state.filter);
  // const getProduct = useAppSelector((state) => state.products);

  const getProductList = useQuery({
    queryKey: ["get-products", page],
    queryFn: async () => {
      const res = await getProducts({
        limit: productListLimit,
        skip: page * productListLimit - productListLimit,
      });
      dispatch(filterActions.getFilters(res));
      console.log(res);
      return res;
    },
    refetchOnWindowFocus: false,
    retry: 1,
    // keepPreviousData: true,
  });

  console.log(getFilters.list);
  console.log(getFilters.filteredItems, " filtered");

  // React.useEffect(() => {
  //   if (getProductList.isSuccess && getProductList.data) {
  //     // setProduct((prev) => [...prev, ...getProductList.data]);
  //     setProduct([...getProduct.list, ...getProductList.data]);

  //     dispatch(
  //       productActions.getProduct([...getProduct.list, ...getProductList.data])
  //     );
  //     // dispatch(
  //     //   filterActions.getFilters([
  //     //     ...getFilters.filteredItems,
  //     //     ...getProductList.data,
  //     //   ])
  //     // );
  //   }
  // }, [getProductList.isSuccess, getProductList.data]);
  // console.log(product, "proalll");

  // console.log(getProduct.list,"prolist");

  return (
    <>
      <main className="my-10">
        <div className="flex gap-6 flex-wrap">
          {getFilters.filters && getFilters.filteredItems.length > 0 ? (
            getFilters.filteredItems.map((el) => (
              <ProductCard
                key={el.id}
                id={el.id}
                price={el.price}
                stock={el.stock}
                title={el.title}
                images={el.images}
                rating={el.rating}
                quantity={0}
                addToCart={() => dispatch(productActions.addToCart(el))}
              />
            ))
          ) : (
            <p className="font-medium">NOT FOUND PRODUCT</p>
          )}

          {!getFilters.filters &&
            getFilters.list.map((el) => (
              <ProductCard
                key={el.id}
                id={el.id}
                price={el.price}
                stock={el.stock}
                title={el.title}
                images={el.images}
                rating={el.rating}
                quantity={0}
                addToCart={() => dispatch(productActions.addToCart(el))}
              />
            ))}
        </div>
        <button
          className="mt-8 border-none text-gray-600 outline-none font-semibold text-sm cursor-pointer disabled:cursor-auto"
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={getProductList.isLoading || getProductList.isFetching}
        >
          {getProductList.isPending ? "Loading..." : "Load More"}
        </button>
      </main>
    </>
  );
};
