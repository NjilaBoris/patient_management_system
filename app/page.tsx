"use client";

import PatientForm from "@/components/forms/PatientForm";
import { SignUpSchema } from "@/lib/validations";
import Image from "next/image";
import Link from "next/link";
import { number } from "zod";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="Patient"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm
            schema={SignUpSchema}
            defaultValues={{ username: "", email: "", phoneNumber: Number(0) }}
            onSubmit={(data) => Promise.resolve({ success: true, data })}
          />

          <div className="text-14-regular  mt-20 flex justify-between">
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
