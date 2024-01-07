import defaultUser from '@assets/images/defaultUser.png';
import gallery from '@assets/icons/gallery.svg';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import closeIcon from '@assets/icons/close.svg';
import { Timestamp } from 'firebase/firestore';
import { useAppSelector, useAppDispatch } from '@hooks/redux';
import { ITweet } from '@customTypes/models';
import { setTweets } from '@store/reducers/tweetsSlice';
import { addTweet } from '@db/tweet';
import { ITweetForm } from '@customTypes/index';

import {
  BtnTweet,
  ButtonsWrapper,
  Close,
  Form,
  ImageClose,
  ImageTwitter,
  ImageWrapper,
  LabelTweet,
  LoaderStatus,
  TweetFormSection,
  TwittInput,
  TwittText,
  UserWrapperImage,
} from './styled';

import { ImageApp, ImageUser } from '../ui';

export function TweetForm({ onClose }: ITweetForm) {
  const user = useAppSelector((state) => state.userReducer);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [image, setImage] = useState<File | null>(null);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const { uid } = user;
    if (uid) {
      let tweetData: ITweet = {
        id: '',
        text,
        timestamp: Timestamp.fromDate(new Date()).toMillis(),
        amountOfLikes: 0,
        usersLikes: [],
        userId: uid,
      };

      const [imageUrl, tweetId] = await addTweet(tweetData, image);
      if (tweetId) {
        tweetData = { ...tweetData, id: tweetId, imageUrl };
        dispatch(setTweets([tweetData]));
      }
    }

    setLoading(false);
    setImage(null);
    setText('');
    if (onClose) {
      onClose();
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
    }
  };

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

  const handleDeleteImage = () => {
    setImage(null);
  };

  return (
    <TweetFormSection data-testid='tweet-form'>
      <UserWrapperImage>
        <ImageUser alt='user icon' src={defaultUser} />
      </UserWrapperImage>
      <Form onSubmit={handleSubmit} autoComplete='off' noValidate>
        <TwittText
          data-cy='text-tweet'
          onChange={handleInputChange}
          value={text}
          rows={1}
          ref={textareaRef}
          placeholder="What's happening"
        />
        {image && (
          <ImageWrapper>
            <ImageTwitter data-testid='image-tweet' alt='gallery' src={URL.createObjectURL(image)} />
            <Close onClick={handleDeleteImage} data-testid='delete-image-tweet'>
              <ImageClose src={closeIcon} alt='cross' />
            </Close>
          </ImageWrapper>
        )}
        <ButtonsWrapper>
          <LabelTweet data-cy='image-input-tweet' data-testid='image-input' htmlFor='galleryInput'>
            <ImageApp alt='gallery' src={gallery} />
            <TwittInput onChange={handleImageChange} accept='image/*' type='file' id='galleryInput' />
          </LabelTweet>
          <BtnTweet data-cy='btn-tweet' disabled={text === ''} type='submit' data-testid='tweet-submit'>
            Tweet
          </BtnTweet>
        </ButtonsWrapper>
      </Form>
      {loading && <LoaderStatus data-cy='loader-tweet' />}
    </TweetFormSection>
  );
}
