"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ButtonHTMLAttributes } from "react";

type props = {
  title: string;
  className?: string;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "destructive"
    | "link"
    | null
    | undefined
    | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function BackButton({ title, className, variant, ...props }: props) {
  const router = useRouter();

  return (
    <Button
      className={className}
      variant={variant}
      onClick={() => router.back()}
      {...props}
    >
      {title}
    </Button>
  );
}
