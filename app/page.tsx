"use client";

import PatientForm from "@/components/forms/PatientForm";

import { UserFormValidation } from "@/lib/validations";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container  max-w-[496px]">
          <Image
            src="icons/logo-full.svg"
            height={200}
            width={200}
            alt="Patient"
            className="mb-8 h-8 w-fit"
          />
          <PatientForm
            schema={UserFormValidation}
            defaultValues={{ name: "", email: "", phone: "" }}
            onSubmit={(data) => Promise.resolve({ success: true, data })}
          />

          <div className="text-14-regular  mt-8 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 CarePulse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/images/onboarding-img.png"
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
