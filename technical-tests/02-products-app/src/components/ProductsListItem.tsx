import { Product } from "../App";

const statusVariants = {
  available:
    "px-4 py-1 bg-green-500 bg-opacity-20 border rounded-xl border-solid border-green-600 text-green-600",
  notAvailable:
    "px-4 py-1 bg-red-500 bg-opacity-20 border rounded-xl border-solid border-red-600 text-red-600",
};

type ProductsListItemProps = {
  product: Product;
};

export function ProductsListItem({
  product: { id, name, category, price, available },
}: ProductsListItemProps) {
  return (
    <tr>
      <td className="px-6 py-4">{id}</td>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{category}</td>
      <td className="px-6 py-4">{price}$</td>
      <td className="w-[220px] px-6 py-3">
        <div
          className={
            available
              ? `${statusVariants.available}`
              : `${statusVariants.notAvailable}`
          }
        >
          {available ? "available" : "not available"}
        </div>
      </td>
    </tr>
  );
}
