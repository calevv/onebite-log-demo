import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";

export default function PostEditorModal() {
  return (
    <Dialog>
      <DialogContent>
        <DialogTitle>포스트 작성</DialogTitle>
        <textarea />
        <Button>
          <ImageIcon />
          이미지 추가
        </Button>
        <Button>저장</Button>
      </DialogContent>
    </Dialog>
  );
}
