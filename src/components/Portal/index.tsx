import { IPortal } from '@customTypes/modal';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';


export const Portal = ({ children }: IPortal) => {
  const [modalContainer] = useState(document.createElement('div'));
  useEffect(() => {
    let modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      const tempEl = document.createElement('div');
      tempEl.id = 'modal-root';
      document.body.append(tempEl);
      modalRoot = tempEl;
    }

    modalRoot.appendChild(modalContainer);

  }, [modalContainer]);

  return ReactDOM.createPortal(children, modalContainer);
};
