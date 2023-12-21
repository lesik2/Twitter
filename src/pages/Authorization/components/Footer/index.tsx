import {FOOTER_AUTH } from "@constants/auth"

import { Footer, FooterLink } from "./styled"

export  function FooterComponent() {
  return (
    <Footer>
        {
        FOOTER_AUTH.map((item, index)=>(
          // eslint-disable-next-line react/no-array-index-key
          <FooterLink key={index}>
            {item}
          </FooterLink>
        ))
        }
      </Footer>
  )
}
