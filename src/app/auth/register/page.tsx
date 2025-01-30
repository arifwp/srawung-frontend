"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import InputPrimary from "@/components/inputs/InputPrimary";
import PasswordInput from "@/components/inputs/PasswordInput";
import UsernameInput from "@/components/inputs/UsernameInput";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as yup from "yup";

interface FormValues {
  name: string;
  username: string;
  email: string;
  password: string;
}

const initialValues = {
  name: "",
  username: "",
  email: "",
  password: "",
};

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email harus diisi")
        .email("Format email salah"),
      name: yup.string().required("Nama harus diisi"),
      username: yup.string().required("Username harus diisi"),
      password: yup.string().required("Password harus diisi"),
    }),
    onSubmit: (values: FormValues) => {
      console.log("values email", values.email);
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);

        router.push("login");
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
            placeholder="John Doe"
            label="Name"
            isError={!!formik.touched.name && !!formik.errors.name}
            errorMsg={formik.errors.name}
            onConfirm={(value: string) => {
              formik.setFieldValue("name", value);
            }}
          />

          <UsernameInput
            className="mt-6"
            placeholder="johndoe"
            label="Username"
            isError={!!formik.touched.username && !!formik.errors.username}
            errorMsg={formik.errors.username}
            onConfirm={(value: string) => {
              formik.setFieldValue("username", value);
            }}
          />

          <InputPrimary
            className="mt-6"
            placeholder="example@gmail.com"
            label="Email"
            type="email"
            isError={!!formik.touched.email && !!formik.errors.email}
            errorMsg={formik.errors.email}
            onConfirm={(value: string) => {
              formik.setFieldValue("email", value);
            }}
          />

          <PasswordInput
            className="mt-6"
            label="Password"
            isError={!!formik.touched.password && !!formik.errors.password}
            errorMsg={formik.errors.password}
            onConfirm={(value: string) => {
              formik.setFieldValue("password", value);
            }}
          />
        </div>

        <PrimaryButton
          title="Daftar"
          className="mt-8 md:mt-8"
          isLoading={isLoading}
        />
      </div>
    </form>
  );
}
