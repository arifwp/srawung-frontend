"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import InputPrimary from "@/components/inputs/InputPrimary";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as yup from "yup";

interface FormValues {
  email: string;
}

const initialValues = {
  email: "",
};
export default function page() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email harus diisi")
        .email("Format email salah"),
    }),
    onSubmit: (values: FormValues) => {
      console.log("values email", values.email);
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);

        router.push("password");
        localStorage.setItem("registeredEmail", values.email);
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
            Daftarkan email anda dan mulai gunakan aplikasi
          </p>

          <InputPrimary
            className="mt-12"
            placeholder="Email"
            label="Email"
            isError={!!formik.touched.email && !!formik.errors.email}
            errorMsg={formik.errors.email}
            onConfirm={(value: string) => {
              formik.setFieldValue("email", value);
            }}
          />
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
