import { Button } from "@/components/ui/button";
import { useOpenPostEditorModal } from "@/store/post-editor-modal";
import type { PostEntity } from "@/types";

export default function EditPostItemButton(props: PostEntity) {
  const openPostEditorModal = useOpenPostEditorModal();

  const handleButtonClick = () => {
    // openPostEditorModal({
    //   type: "EDIT",
    //   postId: props.id,
    //   content: props.content,
    //   imageUrls: props.image_urls,
    // });
  };

  return (
    <Button
      onClick={handleButtonClick}
      className="cursor-pointer"
      variant={"ghost"}
    >
      수정
    </Button>
  );
}
