'use client'
import { useState } from "react";
import DataTable from "../data-table";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
export default function AdminContactView({ data,
    handleEdit,
    handleDelete }) {
    // console.log(data);
    const [selectedMessage, setSelectedMessage] = useState(null);

    const markAsRead = useMutation(api.contact.markAsRead);

    async function handleView(item) {
  if (item.status === "New") {
    await markAsRead({
      id: item._id,
    });

    setSelectedMessage({
      ...item,
      status: "Read",
    });
  } else {
    setSelectedMessage(item);
  }
}
    return (
        //         <div className="flex flex-col gap-5 bg-[#FF4500]">
        //             {
        //                 data && data.length ?
        //                     data.map(item => <div className="p-5 border ">
        //                         <p >{item.name}</p>
        //                         <p >{item.email}</p>
        //                         <p >{item.message}</p>
        //                     </div>)
        //                     : null
        //             }
        //             <DataTable
        //   data={data}
        //   columns={[
        //     "name",
        //     "email",
        //     "message",
        //   ]}
        //   onDelete={handleDelete}
        //   onEdit={() => {}}
        // />
        //         </div>
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">

                <h2 className="text-2xl font-bold text-white">
                    Contact / Messages
                </h2>

                <p className="text-zinc-500 text-sm mb-8">
                    Contact &gt; All Messages
                </p>

                <div className="hidden md:block">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-zinc-800">
                                <th className="text-left text-zinc-500 py-3">Name</th>
                                <th className="text-left text-zinc-500 py-3">Email</th>
                                <th className="text-left text-zinc-500 py-3">Status</th>
                                <th className="text-left text-zinc-500 py-3">Date</th>
                                <th className="text-right text-zinc-500 py-3">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data?.map((item) => (
                                <tr
                                    key={item._id}
                                    className="border-b border-zinc-800 hover:bg-zinc-900"
                                >
                                    <td className="py-4 text-white">
                                        {item.name}
                                    </td>

                                    <td className="py-4 text-zinc-300">
                                        {item.email}
                                    </td>

                                    <td className="py-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs
    ${item.status === "New"
                                                    ? "bg-orange-500/20 text-orange-400"
                                                    : "bg-blue-500/20 text-blue-400"
                                                }
  `}
                                        >
                                            {item.status}
                                        </span>
                                    </td>

                                    <td className="py-4 text-zinc-400">
                                        {new Date(item._creationTime).toLocaleDateString()}
                                    </td>

                                    <td className="py-4 flex gap-3">

                                        <button
                                            onClick={() => handleView(item)}
                                            className="text-blue-400"
                                        >
                                            👁️
                                        </button>

                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="text-red-500"
                                        >
                                            🗑️
                                        </button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                <div className="md:hidden space-y-4">
  {data?.map((item) => (
    <div
      key={item._id}
      className="bg-zinc-900 rounded-xl p-4"
    >
      <h3 className="text-white font-semibold">
        {item.name}
      </h3>

      <p className="text-zinc-400 text-sm">
        {item.email}
      </p>

      <p className="text-zinc-500 mt-2 line-clamp-2">
        {item.message}
      </p>

      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={() => handleView(item)}
          className="text-blue-400"
        >
          👁️
        </button>

        <button
          onClick={() => handleDelete(item._id)}
          className="text-red-500"
        >
          🗑️
        </button>
      </div>
    </div>
  ))}
</div>

{selectedMessage && (
  <div
    onClick={() => setSelectedMessage(null)}
    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-[modal_0.25s_ease]"
    >
      {/* Header */}
      <div className="bg-[#0b0f14] flex items-center justify-between border-b border-zinc-800 px-6 py-5">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Contact Message
          </h2>

          <p className="text-zinc-500 text-sm">
            View message details
          </p>
        </div>

        <button
          onClick={() => setSelectedMessage(null)}
          className="text-2xl text-zinc-400 hover:text-white"
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="bg-[#0b0f14] space-y-6 p-6 max-h-[70vh] overflow-y-auto">

        <div>
          <p className="text-zinc-500 mb-1">Status</p>

          <span
            className={`px-3 py-1 rounded-full text-xs ${
              selectedMessage.status === "New"
                ? "bg-orange-500/20 text-orange-400"
                : "bg-blue-500/20 text-blue-400"
            }`}
          >
            {selectedMessage.status}
          </span>
        </div>

        <div>
          <p className="text-zinc-500 mb-1">Name</p>

          <div className="bg-zinc-800 rounded-lg p-3 text-white">
            {selectedMessage.name}
          </div>
        </div>

        <div>
          <p className="text-zinc-500 mb-1">Email</p>

          <div className="bg-zinc-800 rounded-lg p-3 text-white">
            {selectedMessage.email}
          </div>
        </div>

        <div>
          <p className="text-zinc-500 mb-1">Message</p>

          <div className="bg-zinc-800 rounded-lg p-4 text-white whitespace-pre-wrap">
            {selectedMessage.message}
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-zinc-800 p-5 flex justify-end">
        <button
          onClick={() => setSelectedMessage(null)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
            </div>

        </div>
    )
}