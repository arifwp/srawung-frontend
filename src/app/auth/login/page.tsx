"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import InputPrimary from "@/components/inputs/InputPrimary";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as yup from "yup";

interface FormValues {
  username: string;
  password: string;
}

const initialValues = {
  username: "",
  password: "",
};

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object().shape({
      username: yup.string().required("Username harus diisi"),
      password: yup.string().required("Password harus diisi"),
    }),
    onSubmit: (values: FormValues) => {
      console.log("values username", values.username);
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);

        router.replace("/home");
        localStorage.setItem("registeredUsername", values.username);
      }, 3000);
    },
  });

  return (
    <form className="w-full min-h-full" onSubmit={formik.handleSubmit}>
      <div className="w-full h-full flex flex-col justify-between md:justify-center">
        <div className="flex flex-col">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold ">
            Selamat Datang!
          </h1>

          <p className="text-sm md:text-md mt-2 opacity-secondary">
            Interaksi kini lebih mudah menggunakan aplikasi
          </p>

          <InputPrimary
            className="mt-12"
            placeholder="Username"
            label="Username"
            isError={!!formik.touched.username && !!formik.errors.username}
            errorMsg={formik.errors.username}
            onConfirm={(value: string) => {
              formik.setFieldValue("username", value);
            }}
          />

          <InputPrimary
            className="mt-4"
            placeholder="Password"
            label="Password"
            type="password"
            isError={!!formik.touched.password && !!formik.errors.password}
            errorMsg={formik.errors.password}
            onConfirm={(value: string) => {
              formik.setFieldValue("password", value);
            }}
          />

          <div className="mt-3 flex justify-end cursor-pointer">
            <p className="text-md">Lupa Password?</p>
          </div>
        </div>

        <PrimaryButton
          title="Masuk"
          className="mt-8 md:mt-8"
          isLoading={isLoading}
        />
      </div>
    </form>
  );
}
