import clsx from "clsx";
import React, { useEffect, useState } from "react";

interface Props {
  className?: string;
  inputValue?: string;
  onConfirm: (input: string) => void;
  label?: string;
  isError?: boolean;
  errorMsg?: string;
  placeholder?: string;
}

export default function UsernameInput({
  className,
  inputValue,
  onConfirm,
  label,
  isError,
  errorMsg,
  placeholder,
}: Props) {
  const [data, setData] = useState<string>(inputValue?.toString() || "");

  useEffect(() => {
    if (inputValue) {
      setData(inputValue.toString());
    } else {
      setData("");
    }
  }, [inputValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const filteredValue = inputValue.replace(/[^a-zA-Z0-9]/g, "");
    onConfirm(filteredValue);
    setData(filteredValue);
  };

  return (
    <div className={clsx(`w-full flex flex-col`, className)}>
      {label && <label className="text-sm mb-2">{label}</label>}

      <input
        className={clsx(`w-full p-3 input-primary rounded-md md:rounded-lg`)}
        type={"text"}
        onChange={handleChange}
        autoComplete="off"
        value={data}
        placeholder={placeholder ? placeholder : undefined}
      />

      {isError && (
        <p className="mt-2 text-sm text-red-400">
          {errorMsg || "Periksa kembali inputan anda"}
        </p>
      )}
    </div>
  );
}
