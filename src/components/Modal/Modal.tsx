import { Portal } from "components/Portal/Portal";
import { memo } from "react";
import { TargetPortal } from "types";
import { Button, ModalInfo, ModalText, WrapperModal } from "./styles";

interface IProps {
  message: string;
  handleClick: () => void;
}
export const Modal = memo(({ message, handleClick }: IProps) => {
  return (
    <Portal target={TargetPortal.MODAL}>
      <WrapperModal>
        <ModalInfo>
          <ModalText>{message}</ModalText>
          <Button onClick={handleClick}>OK</Button>
        </ModalInfo>
      </WrapperModal>
    </Portal>
  );
});
