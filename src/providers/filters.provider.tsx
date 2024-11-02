import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { filterActions } from "../redux/features/filter.slice";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../apis/product.api";

export const FilterProvider: React.FC<{
  children: JSX.Element | JSX.Element[];
}> = ({ children }) => {
  const list = useAppSelector((state) => state.filter.list);
  const dispatch = useAppDispatch();

  const getProductList = useQuery({
    queryKey: ["get-products"],
    queryFn: getProducts,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  React.useEffect(() => {
    if (list.length > 0) return;
    dispatch(filterActions.setBrands(getProductList.data!));
  }, [list]);

  return <>{children}</>;
};
