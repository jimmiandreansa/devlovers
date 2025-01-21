"use client"

import React from 'react'
import { Button, buttonVariants } from './ui/button';
import { signOut } from 'next-auth/react';

const UserAccountNav = () => {
  return (
    // <Button className={buttonVariants()} onClick={() => signOut({
    //   redirect: true,
    //   callbackUrl: `${window.location.origin}/sign-in`
    // })}>
    <Button className={buttonVariants()} onClick={() => signOut()}>
      Sign Out
    </Button>
  );
}

export default UserAccountNav
