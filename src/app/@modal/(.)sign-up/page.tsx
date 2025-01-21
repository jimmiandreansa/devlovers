import SignUpForm from "@/components/form/SignUpForm";
import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import React from "react";

const Modal = dynamic(() => import("@/components/core/Modal"), {
  loading: () => <p>Loading...</p>,
});

const SignUpPage = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="w-full">
      <Modal>
        <SignUpForm />
      </Modal>
    </div>
  );
};

export default SignUpPage;
