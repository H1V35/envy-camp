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

const STATUS = {
  ALL: "all",
  AVAILABLE: "available",
  NOT_AVAILABLE: "notAvailable",
};

const SORT_BY = {
  NONE: "none",
  NAME_ASC: "nameAsc",
  NAME_DESC: "nameDesc",
  PRICE_ASC: "priceAsc",
  PRICE_DESC: "priceDesc",
};

export function App() {
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState(STATUS.ALL);
  const [sortBy, setSortBy] = useState(SORT_BY.NONE);

  const filterAndSortProducts = () => {
    let products = productsFromJSON;

    nameFilter?.trim() &&
      (products = products.filter((product) => {
        return product.name.toLowerCase().includes(nameFilter.toLowerCase());
      }));

    statusFilter !== STATUS.ALL &&
      (products = products.filter((product) => {
        return product.available === (statusFilter === STATUS.AVAILABLE);
      }));

    sortBy === SORT_BY.NONE
      ? (products = products.sort((a, b) => a.id - b.id))
      : (products = products.sort((a, b) => {
          switch (sortBy) {
            case SORT_BY.NAME_ASC:
              return a.name.localeCompare(b.name);

            case SORT_BY.NAME_DESC:
              return b.name.localeCompare(a.name);

            case SORT_BY.PRICE_ASC:
              return a.price - b.price;

            case SORT_BY.PRICE_DESC:
              return b.price - a.price;

            default:
              return 0;
          }
        }));

    return products;
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNameFilter(value);

    filterAndSortProducts();
  };

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setStatusFilter(value);

    filterAndSortProducts();
  };

  const handleSortByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSortBy(value);

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

          <select
            value={statusFilter}
            onChange={handleStatusChange}
            className="w-[24%] px-6 pt-3 pb-2 bg-white border rounded-xl border-solid border-black focus:outline-purple-300"
          >
            <option value={STATUS.ALL}>All</option>
            <option value={STATUS.AVAILABLE}>Available</option>
            <option value={STATUS.NOT_AVAILABLE}>Not available</option>
          </select>

          <select
            value={sortBy}
            onChange={handleSortByChange}
            className="w-[20%] px-6 pt-3 pb-2 bg-white border rounded-xl border-solid border-black focus:outline-purple-300"
          >
            <option value={SORT_BY.NONE}>None</option>
            <option value={SORT_BY.NAME_DESC}>Name ↓</option>
            <option value={SORT_BY.NAME_ASC}>Name ↑</option>
            <option value={SORT_BY.PRICE_DESC}>Price ↓</option>
            <option value={SORT_BY.PRICE_ASC}>Price ↑</option>
          </select>
        </form>
      </section>

      <section className="overflow-hidden border rounded-3xl border-black">
        <ProductsList products={filterAndSortProducts()} />
      </section>
    </main>
  );
}
