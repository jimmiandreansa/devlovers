"use client";

import { useRouter } from "next/navigation";
import { MouseEventHandler, ReactNode, useRef } from "react";

export default function Modal({ children }: { children: ReactNode }) {
  const overlay = useRef<HTMLDivElement>(null);
  const modalContent = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const close: MouseEventHandler = (e) => {
    if (
      e.target === overlay.current &&
      !modalContent.current?.contains(e.target as Node)
    ) {
      router.back();
    }
  };

  return (
    <div
      ref={overlay}
      className="fixed left-0 right-0 top-0 bottom-0 mx-auto bg-black/50 z-50"
      onClick={close}
    >
      <div
        ref={modalContent}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg"
        style={{width: "400px"}}
        
      >
        {children}
      </div>
    </div>
  );
}
