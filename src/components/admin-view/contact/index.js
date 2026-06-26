'use client'
import DataTable from "../data-table";
export default function AdminContactView({ data,
  handleEdit,
  handleDelete }) {
    // console.log(data);
    return (
        <div className="flex flex-col gap-5 bg-[#FF4500]">
            {
                data && data.length ?
                    data.map(item => <div className="p-5 border ">
                        <p >{item.name}</p>
                        <p >{item.email}</p>
                        <p >{item.message}</p>
                    </div>)
                    : null
            }
            <DataTable
  data={data}
  columns={[
    "name",
    "email",
    "message",
  ]}
  onDelete={handleDelete}
  onEdit={() => {}}
/>
        </div>
    )
}