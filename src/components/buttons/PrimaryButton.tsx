"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

interface Props {
  title?: string;
  variant?: string;
  className?: string;
  isLoading?: boolean;
}

export default function PrimaryButton({
  title = "Submit",
  variant = "solid",
  className,
  isLoading = false,
  ...rest
}: Props) {
  const [buttonStyle, setButtonStyle] = useState<string>("");

  useEffect(() => {
    switch (variant) {
      case "outline":
        setButtonStyle(
          `bg-transparent text-yellowPrimary border-2 border-yellowPrimary hover:bg-yellowDark`
        );
        break;
      case "ghost":
        setButtonStyle(
          `bg-transparent hover:bg-yellowDark hover:text-white text-yellowPrimary`
        );
        break;
      default:
        setButtonStyle(`bg-yellowPrimary text-darkPrimary`);
    }
  }, [variant]);

  return (
    <button
      className={clsx(
        `w-full px-4 py-3 rounded-md md:rounded-lg font-semibold ${buttonStyle}`,
        className
      )}
      disabled={isLoading ? true : false}
      {...rest}
    >
      {isLoading ? (
        <div className="w-full flex flex-row justify-center items-center gap-2">
          <span
            className={clsx(
              `loader w-4 h-4 border-2 border-t-transparent rounded-full animate-spin ${
                variant === "solid"
                  ? `border-darkPrimary`
                  : variant === "outline"
                  ? `border-yellowPrimarry`
                  : "border-yellowPrimary"
              }`,
              buttonStyle
            )}
          ></span>

          <p className="font-semibold">Loading...</p>
        </div>
      ) : (
        title
      )}
    </button>
  );
}
