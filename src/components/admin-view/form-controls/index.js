"use client";

export default function FormControls({
  controls,
  formData,
  setFormData,
}) {
  return (
    <div className="space-y-6">
      {controls.map((controlItem) => (
        <div key={controlItem.name}>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            {controlItem.label}
          </label>

          {controlItem.type === "textarea" ? (
            <textarea
              placeholder={controlItem.placeholder}
              value={formData[controlItem.name] || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [controlItem.name]: e.target.value,
                })
              }
              className="
              w-full
              min-h-[120px]
              bg-zinc-950
              border
              bg-[#0b0f14]
              border-zinc-800
              rounded-lg
              px-4
              py-3
              text-white
              focus:outline-none
              focus:border-orange-500
              "
            />
          ) : (
            <input
              placeholder={controlItem.placeholder}
              type={controlItem.type}
              value={formData[controlItem.name] || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [controlItem.name]: e.target.value,
                })
              }
              className="
              w-full
              bg-zinc-950
              border
              border-zinc-800
              rounded-lg
              px-4
              py-3
             bg-[#0b0f14]
              text-white
              focus:outline-none
              focus:border-orange-500
              "
            />
          )}
        </div>
      ))}
    </div>
  );
}