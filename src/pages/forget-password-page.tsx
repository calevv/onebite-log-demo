import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSendEmailClick = () => {
    if (email.trim() === "") return;
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <div className="text-xl font-bold">비밀번호를 잊으셨나요?</div>
        <div className="text-muted-foreground">
          이메일로 비밀번호를 재설정 할 수 있는 인증 링크를 보내드립니다.
        </div>
      </div>
      <Input
        className="py-6"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="abc@example.com"
      />
      <Button className="w-full">인증 메일 요청하기</Button>
    </div>
  );
}
