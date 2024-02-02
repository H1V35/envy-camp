import { ProductsListItem } from "./ProductsListItem";
import { Product } from "../App";

type ProductsListProps = {
  products: Product[];
};

export function ProductsList({ products }: ProductsListProps) {
  if (!products.length) {
    return (
      <h2 className="px-6 pt-5 pb-3 text-center text-4xl text-red-500">
        No results found
      </h2>
    );
  }

  return (
    <table className="min-w-full table-auto divide-y divide-black text-center">
      <thead className="text-2xl">
        <tr>
          <th className="px-6 py-4">Id</th>
          <th className="px-6 py-4">Name</th>
          <th className="px-6 py-4">Category</th>
          <th className="px-6 py-4">Price</th>
          <th className="w-[220px] px-8 py-4 text-start">Status</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-black text-xl">
        {products?.map((product) => {
          return <ProductsListItem key={product.id} product={product} />;
        })}
      </tbody>
    </table>
  );
}
