import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignInWithPassword } from "@/hooks/mutaton/use-sign-in-with-password";
import { useState } from "react";
import { Link } from "react-router";
import gitHubLogo from "@/assets/github-mark.svg";
import { useSignInWithOAuth } from "@/hooks/mutaton/use-sign-in-wit-oauth";
import { toast } from "sonner";
import { generateErrorMessage } from "@/lib/errors";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: signInWithPassword, isPending: isSignInWithPasswordPending } =
    useSignInWithPassword({
      onError: (error) => {
        const message = generateErrorMessage(error);

        toast.error(message, { position: "top-center" });
        setPassword("");
      },
    });
  const { mutate: signInWithOAuth, isPending: isSignInWithOAuthPending } =
    useSignInWithOAuth({
      onError: (error) => {
        const message = generateErrorMessage(error);

        toast.error(message, { position: "top-center" });
      },
    });

  const handleSignInWithPassword = () => {
    if (email.trim() === "") return;
    if (password.trim() === "") return;
    signInWithPassword({ email, password });
  };
  const handleSignInWithGitHubClick = () => {
    signInWithOAuth("github");
  };

  const isPending = isSignInWithOAuthPending || isSignInWithPasswordPending;

  return (
    <div className="flex flex-col gap-8">
      <div className="text-xl font-bold">로그인</div>
      <div className="flex flex-col gap-2">
        <Input
          disabled={isPending}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-6"
          type="email"
          placeholder="abc@example.com"
        />
        <Input
          disabled={isPending}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-6"
          type="password"
          placeholder="password"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button
          className="w-full"
          disabled={isPending}
          onClick={handleSignInWithPassword}
        >
          로그인
        </Button>
        <Button
          className="w-full"
          variant={"outline"}
          disabled={isPending}
          onClick={handleSignInWithGitHubClick}
        >
          <img src={gitHubLogo} alt="github logo" className="h-4 w-4" />
          GitHub 계정으로 로그인
        </Button>
      </div>
      <div>
        <Link className="text-muted-foreground hover:underline" to={`/sign-up`}>
          계정이 없다면? 회원가입
        </Link>
      </div>
    </div>
  );
}
