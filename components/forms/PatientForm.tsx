"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z } from "zod";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { CountrySelector } from "react-international-phone";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

interface PatientFormProps<T extends FieldValues> {
  schema: z.ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
}

export default function PatientForm<T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
}: PatientFormProps<T>) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  // 2. Define a submit handler.
  const handleSubmit: SubmitHandler<T> = async () => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-3 flex-1"
      >
        <section className="mb-8 space-y-5">
          <h1 className=" header white">Hi there 👋</h1>
          <p className="text-dark-700 ">Schedule Your first appointment</p>
        </section>
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-input-label">
                  {field.name === "email"
                    ? "Email Address"
                    : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </FormLabel>
                <FormControl>
                  {field.name === "phone" ? (
                    <PhoneInput
                      inputStyle={{
                        width: "100%",
                        padding: "1.2rem",
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                        border: "none",
                      }}
                      value={field.value}
                      onChange={field.onChange}
                      className="input-phone border rounded-md border-dark-500 bg-dark-400"
                    />
                  ) : (
                    <Input
                      required
                      type={field.name === "password" ? "password" : "text"}
                      {...field}
                      className="border rounded-md border-dark-500 bg-dark-400"
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          disabled={form.formState.isSubmitting}
          className="w-full bg-green-500 p-5 rounded-md min-h-12"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
