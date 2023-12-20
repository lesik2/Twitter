import { CONSTANTS, FOOTER_AUTH,ROUTES  } from "@constants/index"
import backTwitter from '@assets/images/backTwitter.jpg';
import twitter from '@assets/icons/twitter.svg';
import google from '@assets/icons/google.svg';
import { NavLink } from 'react-router-dom';

import { Footer, FooterLink, Main, SectionAuth, WrapperImage, Image, AuthWrapper, IconTwitter, AuthTitle, AuthSubTitle, RegisterWrapper, RegisterLink, RegisterText, IconGoogle, AuthText, AuthMarkText, LoginText, AuthMarkLogin } from "./styled"

export function Authorization() {
  
  return (
    <SectionAuth>
      <Main>
        <WrapperImage>
          <Image  src={backTwitter} alt='Twitter'/>
        </WrapperImage>
        <AuthWrapper>
          <IconTwitter alt="Twitter" src={twitter}/>
          <AuthTitle>
            {CONSTANTS.AUTH_TITLE}
          </AuthTitle>
          <AuthSubTitle>
            {CONSTANTS.AUTH_SUBTITLE}
          </AuthSubTitle>
          <RegisterWrapper>
            <RegisterLink>
              <IconGoogle alt="google" src={google}/>
              <RegisterText>
                {CONSTANTS.AUTH_GOOGLE}
              </RegisterText>
            </RegisterLink>
            <NavLink to={ROUTES.SIGN_UP}>
              <RegisterLink>
                <RegisterText>
                  {CONSTANTS.AUTH_EMAIL}
                </RegisterText>
              </RegisterLink>
            </NavLink>
          </RegisterWrapper>
          <AuthText>
            By singing up you agree to the 
            <AuthMarkText> Terms of Service </AuthMarkText>
            and <AuthMarkText> Privacy Policy</AuthMarkText>,
            including <AuthMarkText> Cookie Use</AuthMarkText>.
          </AuthText>
            <LoginText>
              {CONSTANTS.AUTH_LOGIN_TEXT}
              <NavLink to={ROUTES.LOG_IN}>
                <AuthMarkLogin > {CONSTANTS.AUTH_LOG_IN} </AuthMarkLogin>
              </NavLink>

            </LoginText>
        </AuthWrapper>
      </Main>
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
    </SectionAuth>
  )
}
