import React from "react";
import { ProductCard } from "../components/product-card";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../apis/product.api";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { productActions } from "../redux/features/product.slice";

export const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const getProductsLists = useAppSelector((state) => state.products.list);

  useQuery({
    queryKey: ["get-products"],
    queryFn: async () => {
      const res = await getProducts();
      dispatch(productActions.getProduct(res));
      console.log(res);
    },
    refetchOnWindowFocus: false,
    retry: 1,
  });

  console.log(getProductsLists);

  return (
    <main className="flex gap-6 flex-wrap justify-center my-10">
      {getProductsLists.map((el) => (
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
    </main>
  );
};
