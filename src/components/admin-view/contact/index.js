'use client'

export default function AdminContactView({ data }) {
    console.log(data);
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
        </div>
    )
}