export default function Container({
  children,
  className = "",
}) {
  return (
    <section
      className={`
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
        py-24
        ${className}
      `}
    >
      {children}
    </section>
  );
}