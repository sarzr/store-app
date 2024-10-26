import React from "react";
import { ProductCard } from "../components/product-card";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../apis/product.api";

export const ProductList: React.FC = () => {
  const getProductList = useQuery({
    queryKey: ["get-products"],
    queryFn: getProducts,
  });

  return (
    <main className="flex gap-6 flex-wrap justify-center my-10">
      {getProductList.data?.map((el) => (
        <ProductCard
          key={el.id}
          price={el.price}
          stock={el.stock}
          title={el.title}
          images={el.images}
          rating={el.rating}
        />
      ))}
    </main>
  );
};
