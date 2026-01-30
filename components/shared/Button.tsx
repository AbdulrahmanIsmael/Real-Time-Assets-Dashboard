import Link from "next/link";
import { MouseEventHandler } from "react";
import { T_Button } from "@/types/static-types";

const Button = ({
  children,
  type,
  buttonType = "submit",
  href,
  style,
  onClickHandler,
}: {
  children: React.ReactNode;
  type: string;
  buttonType?: T_Button;
  href?: string;
  style?: string;
  onClickHandler?: MouseEventHandler;
}) => {
  return (
    <>
      {type === "link" ? (
        <Link
          href={href!}
          title={(children as string) || "button"}
          aria-label={(children as string) || "button"}
          className={`cursor-pointer active:scale-95 transition ${style}`}
        >
          {children}
        </Link>
      ) : (
        <button
          type={buttonType}
          title={(children as string) || "button"}
          aria-label={(children as string) || "button"}
          className={`cursor-pointer active:scale-95 transition ${style}`}
          onClick={onClickHandler}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
