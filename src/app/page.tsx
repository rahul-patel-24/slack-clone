"use client";

// import { useAuthActions } from "@convex-dev/auth/react";
import { UserButton } from "@/features/auth/components/user-button";
// import { Button } from "@/components/ui/button";

export default function Home() {
  // const { signOut } = useAuthActions()
  return (
    <div>You are sign in !
      <UserButton />
      {/* <Button onClick={() => signOut()}>Sign out</Button> */}
    </div>)
}
