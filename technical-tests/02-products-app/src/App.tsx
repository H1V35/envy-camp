import { useState, ChangeEvent } from "react";

import productsFromJSON from "./lib/products.json";
import { ProductsList } from "./components/ProductsList";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  available: boolean;
};

const products = productsFromJSON;

export function App() {
  const [nameFilter, setNameFilter] = useState("");

  const filterAndSortProducts = () => {
    if (!nameFilter?.trim()) return products;

    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(nameFilter.toLowerCase());
    });

    return filteredProducts;
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNameFilter(value);

    filterAndSortProducts();
  };

  return (
    <main className="min-w-[950px] px-8 py-6 flex flex-col justify-between gap-6 bg-white border rounded-3xl border-solid border-black">
      <h1 className="px-2 text-5xl">Products Table App</h1>

      <section className="px-2">
        <form className="flex gap-3 text-xl">
          <input
            type="text"
            value={nameFilter}
            onChange={handleNameChange}
            name="name"
            placeholder="Search by name..."
            className="w-[50%] px-6 pt-3 pb-2 bg-white border rounded-xl border-solid border-black focus:outline-purple-300"
          />
        </form>
      </section>

      <section className="overflow-hidden border rounded-3xl border-black">
        <ProductsList products={filterAndSortProducts()} />
      </section>
    </main>
  );
}
