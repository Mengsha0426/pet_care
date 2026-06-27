"use client";

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealProps<T extends keyof React.JSX.IntrinsicElements = "div"> = {
  children: ReactNode;
  className?: string;
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Reveal<T extends keyof React.JSX.IntrinsicElements = "div">({
  children,
  className = "",
  as,
  ...rest
}: RevealProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={visible ? `reveal visible ${className}`.trim() : `reveal ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}
