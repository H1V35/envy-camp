const statusVariants = {
  available:
    "px-4 py-2 bg-green-500 bg-opacity-30 border rounded-xl border-solid border-green-600 text-green-600",
  notAvailable:
    "px-4 py-2 bg-red-500 bg-opacity-30 border rounded-xl border-solid border-red-600 text-red-600",
};

export function App() {
  return (
    <main className="min-w-[800px] px-8 py-6 flex flex-col justify-between gap-6 bg-white border rounded-3xl border-solid border-black">
      <h1 className="px-2 text-5xl">Products Table App</h1>

      <section className="px-2">
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
      </section>

      <section className="overflow-hidden border rounded-3xl border-black">
        <table className="min-w-full table-auto divide-y divide-black text-center">
          <thead className="text-2xl">
            <tr>
              <th className="px-6 py-3">Id</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Price</th>
              <th className="w-[220px] px-8 py-3 text-start">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-black text-xl">
            <tr>
              <td className="px-6 py-3">1</td>
              <td className="px-6 py-3">Product 1</td>
              <td className="px-6 py-3">Category 1</td>
              <td className="px-6 py-3">11$</td>
              <td className="w-[220px] px-6 py-3">
                <div className={`${statusVariants.available}`}>available</div>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-3">2</td>
              <td className="px-6 py-3">Product 2</td>
              <td className="px-6 py-3">Category 2</td>
              <td className="px-6 py-3">22$</td>
              <td className="w-[220px] px-6 py-3">
                <div className={`${statusVariants.notAvailable}`}>
                  not available
                </div>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-3">3</td>
              <td className="px-6 py-3">Product 3</td>
              <td className="px-6 py-3">Category 3</td>
              <td className="px-6 py-3">33$</td>
              <td className="w-[220px] px-6 py-3">
                <div className={`${statusVariants.available}`}>available</div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
