import { STATUS, SORT_BY, Status, SortBy } from "../constants";

function assertStatus(value: string): asserts value is Status {
  if (!Object.values(STATUS).includes(value as Status)) {
    throw new Error(`Invalid status: ${value}`);
  }
}

// function assertSortBy(value: string): asserts value is SortBy {
//   if (!Object.values(SORT_BY).includes(value as SortBy)) {
//     throw new Error(`Invalid sort by: ${value}`);
//   }
// }

type FilterProps = {
  nameFilter: string;
  statusFilter: string;
  sortBy: string;
  handleNameChange: (value: string) => void;
  handleStatusChange: (value: Status) => void;
  handleSortByChange: (value: SortBy) => void;
};

export function Filter({
  nameFilter,
  statusFilter,
  sortBy,
  handleNameChange,
  handleStatusChange,
  handleSortByChange,
}: FilterProps) {
  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    assertStatus(value);
    handleStatusChange(value);
  };

  return (
    <form className="flex gap-3 text-xl">
      <input
        type="text"
        value={nameFilter}
        onChange={(e) => handleNameChange(e.target.value)}
        name="name"
        placeholder="Search by name..."
        className="w-[50%] px-6 pt-3 pb-2 bg-white border rounded-xl border-solid border-black focus:outline-purple-300"
      />

      <select
        value={statusFilter}
        onChange={handleStatus}
        className="w-[24%] px-6 pt-3 pb-2 bg-white border rounded-xl border-solid border-black focus:outline-purple-300"
      >
        <option value={STATUS.ALL}>All</option>
        <option value={STATUS.AVAILABLE}>Available</option>
        <option value={STATUS.NOT_AVAILABLE}>Not available</option>
      </select>

      <select
        value={sortBy}
        onChange={(e) => handleSortByChange(e.target.value as SortBy)}
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
