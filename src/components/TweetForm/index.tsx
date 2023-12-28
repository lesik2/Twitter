
import defaultUser from '@assets/images/defaultUser.png';
import gallery from '@assets/icons/gallery.svg';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import backTwitter from '@assets/images/backTwitter.jpg';

import { BtnTweet, ButtonsWrapper, Form, ImageTwitter, ImageUser, ImageWrapper, LabelTwitt, TweetFormSection, TwittInput, TwittText, UserWrapperImage } from './styled'

import { ImageApp } from '../ui';

export function TweetForm() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [text, setText] = useState('');
  useEffect(() => {
    const adjustTextareaHeight = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    adjustTextareaHeight();
  }, [text]);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
  };

  return (
    <TweetFormSection>
      <UserWrapperImage>
        <ImageUser alt='user icon' src={defaultUser} />
      </UserWrapperImage>
      <Form>
        <TwittText onChange={handleInputChange} value={text} rows={1}  ref={textareaRef}  placeholder="What's happening"/>
        <ImageWrapper>
          <ImageTwitter alt="gallery" src={backTwitter}/>
        </ImageWrapper>
        <ButtonsWrapper>
          <LabelTwitt htmlFor='galleryInput'>
              <ImageApp alt="gallery" src={gallery}/>
              <TwittInput accept='image/*' type='file' id='galleryInput' />
          </LabelTwitt>
          <BtnTweet>
            Tweet
          </BtnTweet>
        </ButtonsWrapper>
      </Form>
    </TweetFormSection>
  )
}
