import React from "react";
import { ProductCard } from "../components/product-card";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../apis/product.api";
import { useAppDispatch } from "../redux/hook";
import { productActions } from "../redux/features/product.slice";

export const ProductList: React.FC = () => {
  const getProductList = useQuery({
    queryKey: ["get-products"],
    queryFn: getProducts,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const dispatch = useAppDispatch();

  return (
    <main className="flex gap-6 flex-wrap justify-center my-10">
      {getProductList.data?.map((el) => (
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
