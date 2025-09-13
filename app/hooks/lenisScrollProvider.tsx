"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

const LenisScrollProvider = () => {
  const [lenisRef, setLenisRef] = useState<Lenis | null>(null);
  const [rafState, setRafState] = useState<number | null>(null);

  useEffect(() => {
    const scroller = new Lenis();
    let rf: number;

    function raf(time: DOMHighResTimeStamp) {
      scroller.raf(time);
      rf = requestAnimationFrame(raf);
    }

    rf = requestAnimationFrame(raf);

    setRafState(rf);
    setLenisRef(scroller);

    return () => {
      if (lenisRef) {
        cancelAnimationFrame(rafState!);
        lenisRef.destroy();
      }
    };
  }, []);

  return <div></div>;
};

export default LenisScrollProvider;
