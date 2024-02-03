import { Product } from "../App";
import { SortBy } from "../constants";
import { SORT_BY } from "../constants";

const compareById = (a: Product, b: Product) => a.id - b.id;
const compareByNameAsc = (a: Product, b: Product) =>
  a.name.localeCompare(b.name);
const compareByNameDesc = (a: Product, b: Product) =>
  b.name.localeCompare(a.name);
const compareByPriceAsc = (a: Product, b: Product) => a.price - b.price;
const compareByPriceDesc = (a: Product, b: Product) => b.price - a.price;

const sortFunctions: Record<SortBy, (a: Product, b: Product) => number> = {
  [SORT_BY.NONE]: compareById,
  [SORT_BY.NAME_ASC]: compareByNameAsc,
  [SORT_BY.NAME_DESC]: compareByNameDesc,
  [SORT_BY.PRICE_ASC]: compareByPriceAsc,
  [SORT_BY.PRICE_DESC]: compareByPriceDesc,
};

export function sortProducts(products: Product[], sortBy: SortBy) {
  const sortFunction = sortFunctions[sortBy] || compareById;
  return [...products].sort(sortFunction);
}

// export function sortProducts(products: Product[], sortBy: string) {
//   if (sortBy === SORT_BY.NONE) {
//     return products.sort((a, b) => a.id - b.id);
//   }

//   if (sortBy === SORT_BY.NAME_ASC) {
//     return products.sort((a, b) => a.name.localeCompare(b.name));
//   }

//   if (sortBy === SORT_BY.NAME_DESC) {
//     return products.sort((a, b) => b.name.localeCompare(a.name));
//   }

//   if (sortBy === SORT_BY.PRICE_ASC) {
//     return products.sort((a, b) => a.price - b.price);
//   }

//   if (sortBy === SORT_BY.PRICE_DESC) {
//     return products.sort((a, b) => b.price - a.price);
//   }

//   return products;
// }
