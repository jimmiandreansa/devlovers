import Modal from "@/components/core/Modal";
import SignUpForm from "@/components/form/SignUpForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const SignUpPage = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="flex h-screen justify-center">
      <Modal>
        <SignUpForm />
      </Modal>
    </div>
  );
};

export default SignUpPage;
