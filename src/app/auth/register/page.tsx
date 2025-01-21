"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import InputPrimary from "@/components/inputs/InputPrimary";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as yup from "yup";

interface FormValues {
  username: string;
}

const initialValues = {
  username: "",
};
export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object().shape({
      username: yup.string().required("Username harus diisi"),
    }),
    onSubmit: (values: FormValues) => {
      console.log("values username", values.username);
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);

        router.push("password");
        localStorage.setItem("registeredUsername", values.username);
      }, 3000);
    },
  });

  return (
    <form className="w-full min-h-full" onSubmit={formik.handleSubmit}>
      <div className="w-full h-full flex flex-col justify-between md:justify-center">
        <div className="flex flex-col">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold ">
            Daftarkan Akun Anda!
          </h1>

          <p className="text-sm md:text-md mt-2 opacity-secondary">
            Pilih username anda dan mulai daftarkan akun anda
          </p>

          <InputPrimary
            className="mt-12"
            placeholder="Username"
            onConfirm={(value: string) => {
              console.log("value", value);

              formik.setFieldValue("username", value);
            }}
          />

          {formik.touched.username && formik.errors.username && (
            <p className="mt-2 text-sm text-red-400">
              {formik.errors.username}
            </p>
          )}
        </div>

        <PrimaryButton
          title="Lanjutkan"
          className="mt-8 md:mt-8"
          isLoading={isLoading}
        />
      </div>
    </form>
  );
}
