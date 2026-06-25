"use client";

export default function DataTable({
  data = [],
  columns = [],
  onEdit,
  onDelete,
}) {
  return (
    <div className="mt-8 overflow-x-auto">
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

              <td className="p-3 flex gap-2">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}