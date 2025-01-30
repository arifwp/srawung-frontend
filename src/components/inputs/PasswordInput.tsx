"use client";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useEffect, useState } from "react";
import InputPrimary from "./InputPrimary";

interface Props {
  className?: string;
  inputValue?: string;
  onConfirm: (input: string) => void;
  label?: string;
  isError?: boolean;
  errorMsg?: string;
}

export default function PasswordInput({
  className,
  inputValue,
  onConfirm,
  label,
  isError,
  errorMsg,
}: Props) {
  const [data, setData] = useState<string>(inputValue?.toString() || "");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (inputValue) {
      setData(inputValue.toString());
    } else {
      setData("");
    }
  }, [inputValue]);

  const toggleVisible = () => setIsVisible((prev) => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
    onConfirm(e.target.value);
  };

  return (
    <div className={clsx(`w-full flex flex-col gap-0`, className)}>
      {label && <label className="text-sm mb-2">{label}</label>}

      <div className={"w-full relative"}>
        <input
          className="w-full p-3 input-primary rounded-md lg:rounded-lg"
          type={isVisible ? "text" : "password"}
          name="password"
          placeholder="********"
          onChange={handleChange}
          autoComplete="off"
          value={data}
        />

        <button
          className="px-2.5 absolute inset-y-0 end-0 flex items-center z-20 cursor-pointer text-yellowPrimary"
          type="button"
          aria-pressed={isVisible}
          aria-controls="password"
          onClick={toggleVisible}
        >
          {isVisible ? (
            <EyeIcon className="w-4 h-4" aria-hidden="true" />
          ) : (
            <EyeSlashIcon className="w-4 h-4" aria-hidden="true" />
          )}
        </button>
      </div>

      {isError && (
        <p className="mt-2 text-sm text-red-400">
          {errorMsg || "Periksa kembali inputan anda"}
        </p>
      )}
    </div>
  );
}
