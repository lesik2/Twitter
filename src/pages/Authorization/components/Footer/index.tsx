import { FOOTER_AUTH } from '@constants/auth';

import { Footer, FooterLink } from './styled';

export function FooterComponent() {
  return (
    <Footer>
      {FOOTER_AUTH.map((item, index) => (
        <FooterLink key={index}>{item}</FooterLink>
      ))}
    </Footer>
  );
}
