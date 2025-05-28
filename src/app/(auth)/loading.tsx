"use client";

import Link from "next/link";
import { AlertTriangle, Loader } from "lucide-react";

import { Button } from "@/components/ui/button";

const LoadingPage = () => {
  return (
    <div className="h-screen flex flex-col gap-y-2 items-center justify-center">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
};

export default LoadingPage;
