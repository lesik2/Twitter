import { useState } from 'react';
import { FOOTER_AUTH } from '@constants/index';

import { FooterMore, FooterText, FooterTextWrapper, FooterTwitter } from './styled';

export function FooterSearch() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const endOfText = 'More ···';
  const footerText = isOpen ? FOOTER_AUTH : FOOTER_AUTH.slice(0, 5);

  return (
    <FooterTextWrapper>
      {footerText.map((text, index) => {
        if (index === FOOTER_AUTH.length - 1) {
          return null;
        }

        return <FooterText key={text}>{text}</FooterText>;
      })}
      {!isOpen && (
        <FooterMore onClick={handleClick} key={endOfText}>
          {endOfText}
        </FooterMore>
      )}
      <FooterTwitter>{FOOTER_AUTH[FOOTER_AUTH.length - 1]}</FooterTwitter>
    </FooterTextWrapper>
  );
}
