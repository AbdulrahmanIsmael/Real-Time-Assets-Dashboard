"use client";

import { T_Timeout, T_VoidFn } from "@/types/static-types";
import { useEffect, useRef } from "react";

const useBounce = (fn: T_VoidFn, delay: number) => {
  const timerRef = useRef<T_Timeout | null>(null);

  useEffect(() => {
    return () => {
      clearTimer(timerRef.current);
    };
  }, [fn]);

  return () => {
    clearTimer(timerRef.current);

    timerRef.current = setTimeout(() => {
      fn();
    }, delay);
  };
};

export default useBounce;

const clearTimer = (timer: T_Timeout | null) => {
  if (timer) clearTimeout(timer);
};
