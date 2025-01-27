"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
  inputValue?: string;
  onConfirm: (value: string) => void;
  placeholder?: string;
  type?: string;
  label?: string;
  isError?: boolean;
  errorMsg?: string;
}

export default function InputPrimary({
  className,
  inputValue,
  onConfirm,
  placeholder,
  type = "text",
  label,
  isError,
  errorMsg,
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
    <div className={clsx(`w-full flex flex-col`, className)}>
      {label && <label className="text-sm mb-2">{label}</label>}

      <input
        className={clsx(`w-full p-3 input-primary rounded-md md:rounded-lg`)}
        type={type}
        onChange={handleChange}
        autoComplete="off"
        value={data}
        placeholder={placeholder ? placeholder : undefined}
        {...props}
      />

      {isError && (
        <p className="mt-2 text-sm text-red-400">
          {errorMsg || "Periksa kembali inputan anda"}
        </p>
      )}
    </div>
  );
}
