import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="h-dvh flex flex-col items-center justify-center text-4xl p-4 gap-6">
      <h1>Repair Shop</h1>
      <Button asChild>
        <LoginLink>Sign in</LoginLink>
      </Button>
    </main>
  );
}
