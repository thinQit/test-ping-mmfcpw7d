"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SiteContainerProps {
  children?: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer" | "nav";
}

export default function SiteContainer({
  children = null,
  className = "",
  as = "div",
}: Partial<SiteContainerProps>) {
  const Component = as;

  return (
    <Component className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Component>
  );
}
