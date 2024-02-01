export function Filter() {
  return (
    <form
      // onSubmit={handleFormSubmit}
      className="flex gap-3 text-xl"
    >
      <input
        type="text"
        // value={filter.name}
        // onChange={handleInputChange}
        name="name"
        placeholder="Search by name..."
        className="w-[50%] px-6 pt-3 pb-2 bg-white border rounded-xl border-solid border-black focus:outline-purple-300"
      />

      <input
        type="text"
        // value={filter.status}
        // onChange={handleInputChange}
        name="status"
        placeholder="Status"
        className="w-[20%] px-6 pt-3 pb-2 bg-white border rounded-xl border-solid border-black focus:outline-purple-300"
      />

      <input
        type="text"
        // value={filter.sort}
        // onChange={handleInputChange}
        name="sortBy"
        placeholder="Sort by"
        className="w-[20%] px-6 pt-3 pb-2 bg-white border rounded-xl border-solid border-black focus:outline-purple-300"
      />
    </form>
  );
}
