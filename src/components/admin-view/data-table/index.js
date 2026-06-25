"use client";

export default function DataTable({
    data = [],
    columns = [],
    onEdit,
    onDelete,
}) {
    return (
        // <div className="mt-8 overflow-x-auto">
        //     <table className="w-full table-auto">
        //         <thead>
        //             <tr className="bg-zinc-900">
        //                 {columns.map((column) => (
        //                     <th
        //                         key={column}
        //                         className="px-2 md:px-4 py-3 text-left text-xs md:text-sm text-white border-b border-zinc-800 break-words"
        //                     >
        //                         {column}
        //                     </th>
        //                 ))}

        //                 <th className="p-3 text-white">
        //                     Actions
        //                 </th>
        //             </tr>
        //         </thead>

        //         <tbody>
        //             {data?.map((item) => (
        //                 <tr
        //                     key={item._id}
        //                     className="border-b border-zinc-800"
        //                 >
        //                     {columns.map((column) => (
        //                         <td
        //                             key={column}
        //                             className="px-2 md:px-4 py-3 text-xs md:text-sm text-gray-300 break-words"
        //                         >
        //                             {String(item[column] ?? "")}
        //                         </td>
        //                     ))}

        //                     <td className="px-2 md:px-4 py-3">
        //                         <div className="flex flex-col md:flex-row gap-2">
        //                             <button
        //                                 onClick={() => onEdit(item)}
        //                                 className="bg-blue-600 px-2 md:px-3 py-1 rounded text-white text-xs md:text-sm"
        //                             >
        //                                 Edit
        //                             </button>

        //                             <button
        //                                 onClick={() => onDelete(item._id)}
        //                                className="bg-blue-600 px-2 md:px-3 py-1 rounded text-white text-xs md:text-sm"
        //                             >
        //                                 Delete
        //                             </button>
        //                         </div>
        //                     </td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
        <div>
  {/* Mobile Cards */}
  <div className="md:hidden space-y-4">
    {data?.map((item) => (
      <div
        key={item._id}
        className="bg-zinc-900 border border-zinc-800 rounded-xl p-4"
      >
        {columns.map((column) => (
          <div
            key={column}
            className="mb-2"
          >
            <p className="text-xs text-zinc-500 capitalize">
              {column}
            </p>

            <p className="text-white">
              {String(item[column] ?? "")}
            </p>
          </div>
        ))}

        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onEdit(item)}
            className="flex-1 bg-blue-600 py-2 rounded-lg text-white"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(item._id)}
            className="flex-1 bg-red-600 py-2 rounded-lg text-white"
          >
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Desktop Table */}
  <div className="hidden md:block overflow-x-auto">
    <table className="w-full border border-zinc-800">
     {/* Desktop Table */}
<div className="hidden md:block overflow-x-auto">
  <table className="w-full border border-zinc-800">
    <thead>
      <tr className="bg-zinc-900">
        {columns.map((column) => (
          <th
            key={column}
            className="p-3 text-left text-white border-b border-zinc-800"
          >
            {column}
          </th>
        ))}

        <th className="p-3 text-white">
          Actions
        </th>
      </tr>
    </thead>

    <tbody>
      {data?.map((item) => (
        <tr
          key={item._id}
          className="border-b border-zinc-800"
        >
          {columns.map((column) => (
            <td
              key={column}
              className="p-3 text-gray-300"
            >
              {String(item[column] ?? "")}
            </td>
          ))}

          <td className="p-3">
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(item)}
                className="bg-blue-600 px-3 py-1 rounded text-white"
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(item._id)}
                className="bg-red-600 px-3 py-1 rounded text-white"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </table>
  </div>
</div>
    );
}