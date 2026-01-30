"use client";

import { startTransition, useEffect } from "react";

import Button from "@/components/shared/Button";
import { useRouter } from "next/navigation";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const router = useRouter();

  useEffect(() => {
    console.log(error);
  }, [error]);

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <section className="flex flex-col justify-center items-center gap-y-15 mt-60">
      <p className="text-xl sm:text-2xl lg:text-4xl font-bold text-center">
        Something Went Wrong!
      </p>
      <Button
        type="button"
        style="bg-navbar-bg text-text-primary border border-borders px-4 py-2 rounded text-3xl font-medium active:scale-95 transition"
        onClickHandler={() => {
          reload();
        }}
      >
        Try Again!
      </Button>
    </section>
  );
};

export default Error;
