"use client";

import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

export default function Modal({
  children,
  isOpen,
  setIsOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#787878]/10 flex items-center justify-center backdrop-blur-md z-50">
      <div ref={ref}>{children}</div>
    </div>
  );
}
