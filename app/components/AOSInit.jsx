"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation time
      once: false,       // run only once
      easing: "ease-in-out",
    });
  }, []);

  return null;
}