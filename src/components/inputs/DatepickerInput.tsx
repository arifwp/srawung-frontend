"use client";

import formatDate from "@/helpers/helper";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
  inputValue?: string;
  onConfirm: (value: string) => void;
  placeholder?: string;
  type?: string;
}

export default function DatepickerInput({
  className,
  inputValue,
  onConfirm,
  placeholder,
  ...props
}: Props) {
  const [data, setData] = useState<string>(inputValue?.toString() ?? "");
  const inputDateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputValue) {
      setData(inputValue.toString());
    } else {
      setData("");
    }
  }, [inputValue]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = new Date(event.target.value);
    setData(formatDate(value));
    onConfirm(event.target.value);
  };

  const handleClick = () => {
    inputDateRef.current?.showPicker();
  };

  return (
    <>
      <div className="w-full relative">
        <div
          className={clsx(
            `w-full h-[52px] p-3 input-primary flex items-center rounded-md md:rounded-lg`,
            className
          )}
          onClick={handleClick}
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <p
            className={clsx(`text-md`, {
              "text-placeholderColor": !data,
            })}
          >
            {data || placeholder || "Tanggal Lahir"}
          </p>
        </div>

        <input
          ref={inputDateRef}
          type="date"
          value={data}
          onChange={handleDateChange}
          {...props}
          className="absolute inset-0 w-full h-[52px] opacity-0 cursor-pointer"
          style={{
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      </div>
    </>
  );
}
