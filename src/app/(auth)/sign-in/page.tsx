// import Modal from "@/components/core/Modal";
import SignInForm from "@/components/form/SignInForm";
import { getServerSession } from "next-auth";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import React from "react";

const Modal = dynamic(() => import("@/components/core/Modal"), {
  loading: () => <p>Loading...</p>,
});

const SignInPage = async () => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="flex h-screen justify-center">
      <div className="w-1/4">
        <Modal>
          <SignInForm />
        </Modal>
      </div>
    </div>
  );
};

export default SignInPage;
