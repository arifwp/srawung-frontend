"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import InputPrimary from "@/components/inputs/InputPrimary";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  bornDate: Date | undefined;
  address: string;
}

const initialValues = {
  name: "",
  email: "",
  phone: "",
  bornDate: undefined,
  address: "",
};

export default function FillDataPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object().shape({
      name: yup.string().required("Nama harus diisi"),
      email: yup
        .string()
        .required("Email harus diisi")
        .email("Isi email dengan format yang benar"),
      phone: yup.string().required("Nomor telepon harus diisi"),
      bornDate: yup.date().required("Tanggal lahir harus diisi"),
      address: yup.string().required("Alamat harus diisi"),
    }),
    onSubmit: (values: FormValues) => {
      console.log("values", values);
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    },
  });

  return (
    <div className="w-full p-8 gap-12 flex flex-col">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="gap-2 flex flex-col">
          <h1 className="text-xl font-semibold">Lengkapi data anda</h1>
          <p className="text-sm md:text-md">
            Supaya kami bisa tetap berhubungan dengan kamu, lengkapi data kamu
            ya!
          </p>
        </div>

        <p>Lewati</p>
      </div>

      <div className="w-full gap-4 flex flex-col">
        <InputPrimary
          placeholder="Nama Lengkap"
          onConfirm={(input: string) => {
            formik.setFieldValue("name", input);
          }}
        />

        <PrimaryButton className="mt-12" isLoading={isLoading} />
      </div>
    </div>
  );
}
