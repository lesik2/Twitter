import closeIcon from '@assets/icons/close.svg';
import { IModal } from '@customTypes/modal';

import { Close, Content, Image, Wrapper } from './styled';

import { Portal } from '../Portal';

export function Modal({ onClose, children }: IModal) {
  return (
    <Portal>
      <Wrapper>
        <Content>
          {children}
          <Close data-cy='close-modal' onClick={onClose}>
            <Image src={closeIcon} alt='cross' />
          </Close>
        </Content>
      </Wrapper>
    </Portal>
  );
}
