export default function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      className={`
        px-6
        py-3
        rounded-xl
        bg-orange-500
        text-white
        font-semibold
        transition-all
        duration-300
        hover:bg-orange-600
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-orange-500/30
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}