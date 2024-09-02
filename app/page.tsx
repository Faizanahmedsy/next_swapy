"use client";
import Image from "next/image";
import { createSwapy } from "swapy";
import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const swapy = createSwapy(container, {
        animation: "dynamic", // or spring or none
      });

      swapy.enable(true);
    }
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="section-1" data-swapy-slot="foo">
        <div
          className="content-a bg-rose-100 p-5 rounded-lg mx-32 my-10 py-10"
          data-swapy-item="a"
        >
          Hello
        </div>
      </div>

      <div className="section-2" data-swapy-slot="bar">
        <div
          className="content-b bg-blue-100 p-5 rounded-lg mx-32 my-10 py-10"
          data-swapy-item="b"
        >
          World
        </div>
      </div>

      <div className="section-3" data-swapy-slot="baz">
        <div
          className="content-c bg-violet-100 p-5 rounded-lg mx-32 my-10 py-10"
          data-swapy-item="c"
        >
          Foo Bar
        </div>
      </div>
    </div>
  );
}
