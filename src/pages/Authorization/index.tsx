import { CONSTANTS } from '@constants/auth';
import { ROUTES } from '@constants/index';
import backTwitter from '@assets/images/backTwitter.jpg';
import google from '@assets/icons/google.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

import {
  Main,
  SectionAuth,
  WrapperImage,
  Image,
  AuthWrapper,
  RegisterWrapper,
  RegisterBtn,
  RegisterText,
  IconGoogle,
  AuthText,
  AuthMarkText,
  LoginText,
  LinkToLogin,
} from './styled';
import { FooterComponent } from './components/Footer';
import { HeaderComponent } from './components/Header';

export function Authorization() {
  const navigate = useNavigate();
  const login = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(getAuth(), provider);
      navigate(ROUTES.PROFILE);
      // eslint-disable-next-line no-console
      console.log(user);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error);
      }
    }
  };

  return (
    <SectionAuth>
      <Main>
        <WrapperImage>
          <Image src={backTwitter} alt='Twitter' />
        </WrapperImage>
        <AuthWrapper>
          <HeaderComponent />
          <RegisterWrapper>
            <RegisterBtn onClick={login}>
              <IconGoogle alt='google' src={google} />
              <RegisterText>{CONSTANTS.AUTH_GOOGLE}</RegisterText>
            </RegisterBtn>
            <NavLink to={ROUTES.SIGN_UP}>
              <RegisterBtn>
                <RegisterText>{CONSTANTS.AUTH_EMAIL}</RegisterText>
              </RegisterBtn>
            </NavLink>
          </RegisterWrapper>
          <AuthText>
            By singing up you agree to the
            <AuthMarkText> Terms of Service </AuthMarkText>
            and <AuthMarkText> Privacy Policy</AuthMarkText>, including{' '}
            <AuthMarkText> Cookie Use</AuthMarkText>.
          </AuthText>
          <LoginText>
            {CONSTANTS.AUTH_LOGIN_TEXT}
            <LinkToLogin to={ROUTES.LOG_IN}>{CONSTANTS.AUTH_LOG_IN}</LinkToLogin>
          </LoginText>
        </AuthWrapper>
      </Main>
      <FooterComponent />
    </SectionAuth>
  );
}
