import { create } from "zustand";
import { combine, devtools } from "zustand/middleware";

type OpenState = {
  isOpen: true;
  title: string;
  description: string;
  onPositive?: () => void;
  onNegative?: () => void;
};
type CloseState = { isOpen: false };

type State = CloseState | OpenState;

const initialState = { isOpen: false } as State;

const useAlertModalStore = create(
  devtools(
    combine(initialState, (set) => ({
      actions: {
        open: () => {},
        close: () => {},
      },
    })),
    { neme: "AlertModalStore" },
  ),
);
