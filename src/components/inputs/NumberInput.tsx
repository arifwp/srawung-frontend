"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface Props {
  className?: string;
  inputValue?: string;
  onConfirm: (value: string) => void;
  placeholder?: string;
}

export default function NumberInput({
  className,
  inputValue,
  onConfirm,
  placeholder,
  ...rest
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
    const inputValue = e.target.value;

    if (/^\d*$/.test(inputValue)) {
      setData(inputValue);
      onConfirm(inputValue);
    }
  };

  return (
    <input
      className={clsx(
        `w-full p-3 input-primary rounded-md md:rounded-lg`,
        className
      )}
      type="text"
      value={data}
      onChange={handleChange}
      placeholder={placeholder ? placeholder : undefined}
      {...rest}
    />
  );
}
