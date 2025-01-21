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

export default function PasswordPage() {
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

      localStorage.removeItem("registeredUsername");
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
            placeholder="********"
            onConfirm={(value: string) => {
              console.log("value", value);

              formik.setFieldValue("password", value);
            }}
          />

          {formik.touched.password && formik.errors.password && (
            <p className="mt-2 text-sm text-red-400">
              {formik.errors.password}
            </p>
          )}

          <InputPrimary
            className="mt-4"
            type="password"
            placeholder="********"
            onConfirm={(value: string) => {
              console.log("value", value);

              formik.setFieldValue("confirmationPassword", value);
            }}
          />

          {formik.touched.confirmationPassword &&
            formik.errors.confirmationPassword && (
              <p className="mt-2 text-sm text-red-400">
                {formik.errors.confirmationPassword}
              </p>
            )}
        </div>

        <PrimaryButton title="Lanjutkan" className="mt-8 md:mt-8" />
      </div>
    </form>
  );
}
