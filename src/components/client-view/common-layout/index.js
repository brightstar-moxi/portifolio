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

// "use client";

// import { useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Lenis from "@studio-freight/lenis";

// import Navbar from "../navbar";

// export default function CommonLayout({ children }) {
//   const pathname = usePathname();

//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.3,
//       smoothWheel: true,
//       smoothTouch: false,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

//   return (
//     <>
//       {pathname !== "/admin" && <Navbar />}

//       <main className="min-h-screen bg-[#0B0F14] text-white overflow-x-hidden">
//         {children}
//       </main>
//     </>
//   );
// }



"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "@studio-freight/lenis";
import Background from "./Background";
import PageTransition from "./PageTransition";

import Navbar from "../navbar";
 import Footer from "./Footer";
// import ScrollTop from "./ScrollTop";

export default function CommonLayout({ children }) {
  const pathname = usePathname();

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.4,
  //     smoothWheel: true,
  //     smoothTouch: false,
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => lenis.destroy();
  // }, []);

  useEffect(() => {
  const lenis = new Lenis({
    duration: 1,
    lerp: 0.08,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1,
  });

  let rafId;

  const raf = (time) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };

  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
  };
}, []);

  const isAdmin = pathname.startsWith("/admin");

  return (
  <>
    {!isAdmin && <Navbar />}

    {/* {!isAdmin && <ScrollTop />} */}

    <main className="relative min-h-screen overflow-x-hidden bg-[#09090B] text-white">

      {!isAdmin && <Background />}

<PageTransition>
      <div className="relative z-10">
        {children}
      </div>
</PageTransition>
    </main>

    {!isAdmin && <Footer />}
  </>
);
}