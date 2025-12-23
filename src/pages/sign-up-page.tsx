import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignUp } from "@/hooks/mutaton/use-sign-up";
import { generateErrorMessage } from "@/lib/errors";
import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: signUp, isPending: isSignUpPendding } = useSignUp({
    onError: (error) => {
      const message = generateErrorMessage(error);

      toast.error(message, { position: "top-center" });
    },
  });

  const handleSignupClick = () => {
    if (email.trim() === "") return;
    if (password.trim() === "") return;
    signUp({ email, password });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="text-xl font-bold">회원가입</div>
      <div className="flex flex-col gap-2">
        <Input
          disabled={isSignUpPendding}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-6"
          type="email"
          placeholder="abc@example.com"
        />
        <Input
          disabled={isSignUpPendding}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-6"
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <Button
          disabled={isSignUpPendding}
          className="w-full"
          onClick={handleSignupClick}
        >
          회원가입
        </Button>
      </div>
      <div>
        <Link className="text-muted-foreground hover:underline" to={`/sign-in`}>
          이미 계정이 있다면? 로그인
        </Link>
      </div>
    </div>
  );
}
