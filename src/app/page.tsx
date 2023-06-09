"use client";
import Image from "next/image";
import styles from "./page.module.css";
import FilterBar from "@/components/filter-bar";
import ProductList from "@/components/productList";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client} contextSharing={false}>
      <main className={styles.main}>
        <FilterBar />
        <ProductList />
      </main>
    </QueryClientProvider>
  );
}
