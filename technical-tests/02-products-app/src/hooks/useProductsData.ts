import { useState, ChangeEvent } from "react";

import productsFromJSON from "../lib/products.json";
import { STATUS, SORT_BY } from "../constants";

const filterAndSortProducts = ({
  nameFilter,
  statusFilter,
  sortBy,
}: {
  nameFilter: string;
  statusFilter: string;
  sortBy: string;
}) => {
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

export function useProductsData() {
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState(STATUS.ALL);
  const [sortBy, setSortBy] = useState(SORT_BY.NONE);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNameFilter(value);
  };

  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setStatusFilter(value);
  };

  const handleSortByChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSortBy(value);
  };

  const filteredProducts = filterAndSortProducts({
    nameFilter,
    statusFilter,
    sortBy,
  });

  return {
    filteredProducts,
    nameFilter,
    statusFilter,
    sortBy,
    handleNameChange,
    handleStatusChange,
    handleSortByChange,
  };
}
