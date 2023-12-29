import defaultUser from '@assets/images/defaultUser.png';
import gallery from '@assets/icons/gallery.svg';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import closeIcon from '@assets/icons/close.svg';
import { Timestamp, addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { useAppSelector, useAppDispatch } from '@hooks/redux';
import { ITweet } from '@customTypes/index';
import { setTweets } from '@store/reducers/userSlice';

import {
  BtnTweet,
  ButtonsWrapper,
  Close,
  Form,
  ImageClose,
  ImageTwitter,
  ImageUser,
  ImageWrapper,
  LabelTweet,
  LoaderStatus,
  TweetFormSection,
  TwittInput,
  TwittText,
  UserWrapperImage,
} from './styled';
import { uploadImageToStorage } from './helpers';

import { ImageApp } from '../ui';

import { db } from '@//firebase';

export interface ITweetForm{
  onClose?: () => void;
}
export function TweetForm({onClose}: ITweetForm) {
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

    try {
      const tweetData: ITweet = {
        id: '',
        text,
        timestamp: Timestamp.fromDate(new Date()).toMillis(),
        amountOfLikes: 0,
        usersLikes: [],
      };

      if (image) {
        const imageUrl = await uploadImageToStorage(image);
        tweetData.imageUrl = imageUrl;
      }

      if (uid) {
        const userRef = doc(db, 'users', uid);

        const tweetsCollectionRef = collection(userRef, 'tweets');

        const docRef = await addDoc(tweetsCollectionRef, tweetData);
        const tweetId = docRef.id;
        await updateDoc(doc(tweetsCollectionRef, tweetId), {
          id: tweetId,
        });
        tweetData.id = tweetId;
        dispatch(setTweets([tweetData]));
      }

      setLoading(false);
      setImage(null);
      setText('');
      if(onClose){
        onClose();
      }
    } catch (errorObj: unknown) {
      if (errorObj instanceof Error) {
        console.error(errorObj);
      }
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
    <TweetFormSection>
      <UserWrapperImage>
        <ImageUser alt='user icon' src={defaultUser} />
      </UserWrapperImage>
      <Form onSubmit={handleSubmit} autoComplete='off' noValidate>
        <TwittText
          onChange={handleInputChange}
          value={text}
          rows={1}
          ref={textareaRef}
          placeholder="What's happening"
        />
        {image && (
          <ImageWrapper>
            <ImageTwitter alt='gallery' src={URL.createObjectURL(image)} />
            <Close onClick={handleDeleteImage}>
              <ImageClose src={closeIcon} alt='cross' />
            </Close>
          </ImageWrapper>
        )}
        <ButtonsWrapper>
          <LabelTweet htmlFor='galleryInput'>
            <ImageApp alt='gallery' src={gallery} />
            <TwittInput onChange={handleImageChange} accept='image/*' type='file' id='galleryInput' />
          </LabelTweet>
          <BtnTweet disabled={text === ''} type='submit'>
            Tweet
          </BtnTweet>
        </ButtonsWrapper>
      </Form>
      {loading && <LoaderStatus />}
    </TweetFormSection>
  );
}
