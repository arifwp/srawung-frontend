"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
  inputValue?: string;
  onConfirm: (value: string) => void;
  placeholder?: string;
  type?: string;
}

export default function InputPrimary({
  className,
  inputValue,
  onConfirm,
  placeholder,
  type = "text",
  ...props
}: Props) {
  const [data, setData] = useState<string>(inputValue?.toString() ?? "");

  useEffect(() => {
    if (inputValue) {
      setData(inputValue.toString());
    } else {
      setData("");
    }
  }, [inputValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
    onConfirm(e.target.value);
  };

  return (
    <input
      className={clsx(
        `w-full p-3 input-primary rounded-md md:rounded-lg`,
        className
      )}
      type={type}
      onChange={handleChange}
      autoComplete="off"
      value={data}
      placeholder={placeholder ? placeholder : undefined}
      {...props}
    />
  );
}
