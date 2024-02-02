import { ChangeEvent } from "react";

import { STATUS, SORT_BY } from "../constants";

type FilterProps = {
  nameFilter: string;
  statusFilter: string;
  sortBy: string;
  handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleStatusChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleSortByChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export function Filter({
  nameFilter,
  statusFilter,
  sortBy,
  handleNameChange,
  handleStatusChange,
  handleSortByChange,
}: FilterProps) {
  return (
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
  );
}
