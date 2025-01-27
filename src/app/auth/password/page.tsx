"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import InputPrimary from "@/components/inputs/InputPrimary";
import { useFormik } from "formik";
import * as yup from "yup";

interface FormValues {
  password: string;
  confirmationPassword: string;
}

const initialValues: FormValues = {
  password: "",
  confirmationPassword: "",
};

export default function page() {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object().shape({
      password: yup.string().required("Password harus diisi"),
      confirmationPassword: yup
        .string()
        .required("Konfirmasi password harus diisi"),
    }),
    onSubmit: (values: FormValues) => {
      console.log("values password", values);

      localStorage.removeItem("registeredEmail");
    },
  });

  return (
    <form className="w-full min-h-full" onSubmit={formik.handleSubmit}>
      <div className="w-full h-full flex flex-col justify-between md:justify-center">
        <div className="flex flex-col">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold ">
            Kurang Satu Langkah Lagi
          </h1>

          <p className="text-sm md:text-md mt-2 opacity-secondary">
            Tambahkan password untuk akun anda
          </p>

          <InputPrimary
            className="mt-12"
            type="password"
            label="Password"
            placeholder="********"
            isError={!!formik.touched.password && !!formik.errors.password}
            errorMsg={formik.errors.password}
            onConfirm={(value: string) => {
              formik.setFieldValue("password", value);
            }}
          />

          <InputPrimary
            className="mt-8"
            type="password"
            label="Konfirmasi Password"
            isError={
              !!formik.touched.confirmationPassword &&
              !!formik.errors.confirmationPassword
            }
            errorMsg={formik.errors.confirmationPassword}
            placeholder="********"
            onConfirm={(value: string) => {
              formik.setFieldValue("confirmationPassword", value);
            }}
          />
        </div>

        <PrimaryButton title="Lanjutkan" className="mt-8 md:mt-8" />
      </div>
    </form>
  );
}
