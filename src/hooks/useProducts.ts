import { ProductsFetchResponse } from "@/@types/productsResponse";
import { FilterContext } from "@/context/filterContext";
import { mountQuery } from "@/utils/graphgl.filters";
import axios, { AxiosPromise } from "axios";
import { useContext, useDeferredValue } from "react";
import { useQuery } from "react-query";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> => {
  return axios.post(API_URL, {
    query,
  });
};

export function useProducts() {
  const { type, priority, search } = useContext(FilterContext);
  const searchDeferred = useDeferredValue(search);
  const query = mountQuery(type, priority);
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ["products", type, priority],
  });
  const products = data?.data?.data.allProducts;
  const filteredProducts = products?.filter((product) =>
    product.name.toLocaleLowerCase().includes(searchDeferred)
  );
  return { data: filteredProducts };
}
