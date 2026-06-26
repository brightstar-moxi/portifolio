// "use client";
// import { usePathname } from "next/navigation";
// import Navbar from "../navbar";

// export default function CommonLayout({ children }) {
//   const pathName = usePathname();
//   return (
//     <>
//       {pathName !== "/admin" ? <Navbar /> : null}
//       {children}
//     </>
//   );
// }

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";

import Navbar from "../navbar";

export default function CommonLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {pathname !== "/admin" && <Navbar />}

      <main className="min-h-screen bg-[#0B0F14] text-white overflow-x-hidden">
        {children}
      </main>
    </>
  );
}