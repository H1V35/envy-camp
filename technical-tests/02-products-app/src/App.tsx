import { useProductsData } from "./hooks/useProductsData";
import { Filter } from "./components/Filter";
import { ProductsList } from "./components/ProductsList";

export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  available: boolean;
};

export function App() {
  const {
    filteredProducts,
    nameFilter,
    statusFilter,
    sortBy,
    handleNameChange,
    handleStatusChange,
    handleSortByChange,
  } = useProductsData();

  return (
    <main className="min-w-[950px] px-8 py-6 flex flex-col justify-between gap-6 bg-white border rounded-3xl border-solid border-black">
      <h1 className="px-2 text-5xl">Products Table App</h1>

      <section className="px-2">
        <Filter
          nameFilter={nameFilter}
          statusFilter={statusFilter}
          sortBy={sortBy}
          handleNameChange={handleNameChange}
          handleStatusChange={handleStatusChange}
          handleSortByChange={handleSortByChange}
        />
      </section>

      <section className="overflow-hidden border rounded-3xl border-black">
        <ProductsList products={filteredProducts} />
      </section>
    </main>
  );
}
