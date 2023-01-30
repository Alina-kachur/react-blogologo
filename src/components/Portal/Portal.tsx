import { memo, ReactNode } from "react";
import { createPortal } from "react-dom";
import { TargetPortal } from "types/types";

interface IProps {
  children: ReactNode;
  target: TargetPortal;
}

export const Portal = memo(({ children, target }: IProps) => {
  const container = document.getElementById(target) as HTMLElement;
  return createPortal(children, container);
});
