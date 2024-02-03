import React from "react";
import productsFromJSON from "../lib/products.json";
import { Product } from "../App";
import { STATUS, SORT_BY, Status, SortBy } from "../constants";
import { sortProducts } from "../logic/sortProductsLogic";

type filterAndSortProductsProps = {
  products: Product[];
  nameFilter: string;
  statusFilter: string;
  sortBy: SortBy;
};

const filterAndSortProducts = ({
  products,
  nameFilter,
  statusFilter,
  sortBy,
}: filterAndSortProductsProps) => {
  let filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(nameFilter.toLowerCase());
  });

  if (statusFilter !== STATUS.ALL) {
    filteredProducts = products.filter((product) => {
      const shouldBeAvailable = statusFilter === STATUS.AVAILABLE;
      return product.available === shouldBeAvailable;
    });
  }

  return sortProducts(filteredProducts, sortBy);
};

export function useProductsData() {
  const [nameFilter, setNameFilter] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<Status>(STATUS.ALL);
  const [sortBy, setSortBy] = React.useState<SortBy>(SORT_BY.NONE);

  const handleNameChange = (value: string) => {
    setNameFilter(value);
  };

  const handleStatusChange = (value: Status) => {
    setStatusFilter(value);
  };

  const handleSortByChange = (value: SortBy) => {
    setSortBy(value);
  };

  const filteredProducts = React.useMemo(() => {
    return filterAndSortProducts({
      products: productsFromJSON,
      nameFilter,
      statusFilter,
      sortBy,
    });
  }, [nameFilter, statusFilter, sortBy]);

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
