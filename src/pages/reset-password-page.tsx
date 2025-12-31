import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUpdatePassword } from "@/hooks/mutaton/auth/use-update-password";
import { generateErrorMessage } from "@/lib/errors";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { mutate: updatePassword, isPending: isUpdatePasswordPendding } =
    useUpdatePassword({
      onSuccess: () => {
        toast.info("비밀번호가 성곡적으로 변경되었습니다.", {
          position: "top-center",
        });
        setPassword("");
        navigate("/");
      },
      onError: (error) => {
        const message = generateErrorMessage(error);

        toast.error(message, { position: "top-center" });
        setPassword("");
      },
    });

  const handeleUpdatePasswordClick = () => {
    if (password.trim() === "") return;
    updatePassword(password);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <div className="text-xl font-bold">비밀번호 재설정하기</div>
        <div className="text-muted-foreground">
          새로운 비밀번호를 입력하세요.
        </div>
      </div>
      <Input
        disabled={isUpdatePasswordPendding}
        className="py-6"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <Button
        className="w-full"
        onClick={handeleUpdatePasswordClick}
        disabled={isUpdatePasswordPendding}
      >
        비밀번호 변경하기
      </Button>
    </div>
  );
}
