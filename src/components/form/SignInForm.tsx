"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import Link from "next/link";
import GoogleSignInButton from "../GoogleSignInButton";
import { signIn } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import { Lobster } from "next/font/google";
import { Button } from "../ui/button";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

const formSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

const SignInForm = () => {
  const pathname = usePathname();
  console.log("ini pathname", pathname);
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (signInData?.ok) {
      router.back()
      window.location.replace("/");
      toast({
        description: "Welcome to Devlovers",
      });
    } else {
      toast({
        title: "Error",
        description: "Oops! Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <div className="flex items-center justify-center mb-2">
        <Image
          src="https://gcdnb.pbrd.co/images/2vuSqDR2F05t.png?o=1"
          alt="Devlovers Logo"
          className="w-10 h-10 md:w-14 md:h-14"
          width={500}
          height={500}
        />
        <h1 className={"text-2xl md:text-4xl text-main"}>
          <span className={"font-extrabold"}>Dev</span>
          <span className={`${lobster.className}`}>lovers</span>
        </h1>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="jhondoe@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="rounded-lg bg-main px-4 py-2 text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-main w-full mt-6"
          type="submit"
        >
          Sign In
        </Button>
      </form>
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <GoogleSignInButton>Sign up with Google</GoogleSignInButton>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you don&apos;t have an account, please&nbsp;
        <Link
          className="text-blue-500 hover:underline"
          href="/sign-up"
          scroll={false}
        >
          Sign Up
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
