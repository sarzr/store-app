import React from "react";
import { ProductCard } from "../components/product-card";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { productActions } from "../redux/features/product.slice";
import { productListLimit } from "../utils/config";
import useGetProducts from "../hooks/useGetProducts";
import { IProducts } from "../types/product.type";

export const ProductList: React.FC = () => {
  const [page, setPage] = React.useState<number>(1);
  const [product, setProduct] = React.useState<IProducts[]>([]);

  const dispatch = useAppDispatch();

  const getFilters = useAppSelector((state) => state.filter);

  const getProducts = useGetProducts(productListLimit, page);

  React.useEffect(() => {
    if (getProducts.isSuccess && getProducts.data) {
      setProduct((prev) => [...prev, ...getProducts.data]);
    }
  }, [getProducts.isSuccess, getProducts.data]);

  return (
    <>
      <main className="md:my-10 px-2 md:px-0">
        <div className="flex gap-6 flex-wrap justify-center md:justify-normal">
          {getFilters.filters &&
            getFilters.filteredItems.length > 0 &&
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
            ))}

          {getFilters.filteredItems.length <= 0 && (
            <p className="font-medium">NOT FOUND PRODUCT</p>
          )}

          {getFilters.filteredItems.length < 0 &&
            product.map((el) => (
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
          className="mt-8 mx-5 md:mx-0 border-none text-gray-600 outline-none font-semibold text-sm cursor-pointer disabled:cursor-auto"
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={getProducts.isLoading || getProducts.isFetching}
        >
          {getProducts.isPending ? "Loading..." : "Load More"}
        </button>
      </main>
    </>
  );
};
