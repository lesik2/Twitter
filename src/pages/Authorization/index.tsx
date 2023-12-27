import { CONSTANTS, ERRORS_MESSAGE } from '@constants/auth';
import { ROUTES } from '@constants/index';
import backTwitter from '@assets/images/backTwitter.jpg';
import google from '@assets/icons/google.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { SnackBar } from '@components/SnackBar';
import { doc, setDoc } from 'firebase/firestore';
import { COLLECTIONS } from '@constants/firebase';
import { ImageApp } from '@components/ui';

import {
  Main,
  SectionAuth,
  WrapperImage,
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

import { auth, db } from '@//firebase';

export function Authorization() {
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const login = async () => {
    try {
      const userCredential = await signInWithGoogle();
      if (userCredential) {
        const { uid, displayName, phoneNumber, email } = userCredential.user;

        const userDoc = {
          displayName,
          phoneNumber,
          uid,
          dateOfBirth: null,
          email,
        };

        navigate(ROUTES.PROFILE);

        await setDoc(doc(db, COLLECTIONS.USERS, uid), userDoc);
      }
    } catch (errorObj: unknown) {
      if (errorObj instanceof Error) {
        console.error(errorObj);
      }
    }
  };

  return (
    <SectionAuth>
      <Main>
        <WrapperImage>
          <ImageApp src={backTwitter} alt='Twitter' />
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
            {error && <SnackBar message={ERRORS_MESSAGE[error.message] ?? error.message} />}
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
