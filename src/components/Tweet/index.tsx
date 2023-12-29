import defaultUser from '@assets/images/defaultUser.png';
import likeOutline from '@assets/icons/outline/like.svg';
import likeFilled from '@assets/icons/fill/like.svg';
import option from '@assets/icons/option.svg';
import { useCallback, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@hooks/redux';
import {
  collection,
  deleteDoc,
  doc,
  updateDoc,
  increment,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { deleteTweet, updateTweet } from '@store/reducers/userSlice';

import {
  ImageTwitter,
  ImageUser,
  ImageWrapper,
  LikeImageWrapper,
  LikeText,
  LikesWrapper,
  OptionImage,
  OptionItem,
  OptionList,
  OptionWrapper,
  OptionWrapperBtn,
  TweetArticle,
  TweetSubTitle,
  TweetText,
  TweetWrapper,
  UserInfoWrapper,
  UserWrapperImage,
} from './styled';

import { ImageApp } from '../ui';
import { UserTitle } from '../ui/profile';
import { useCloseList } from '../DropDown/hooks/useCloseList';

import { db } from '@//firebase';

export interface ITweetComponent {
  id: string;
  nameUser: string;
  date: string;
  email: string;
  text: string;
  image: string | undefined;
  authorId: string;
  amountOfLikes: number;
  isLiked: boolean;
}
export function Tweet({
  nameUser,
  date,
  email,
  text,
  image,
  id,
  authorId,
  amountOfLikes,
  isLiked,
}: ITweetComponent) {
  const [likesAmount, setLikesAmount] = useState(amountOfLikes);
  const [activeLike, setActiveLike] = useState(isLiked);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const [wrapperRef, listRef] = useCloseList(handleClose);
  const handleDeleteTweet = async () => {
    handleClose();
    if (user.uid === authorId) {
      try {
        const userRef = doc(db, 'users', authorId);
        const tweetsCollectionRef = collection(userRef, 'tweets');

        await deleteDoc(doc(tweetsCollectionRef, id));

        dispatch(deleteTweet(id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleLike = async () => {
    try {
      const userRef = doc(db, 'users', authorId);
      const tweetsCollectionRef = collection(userRef, 'tweets');
      const gap = activeLike ? -1 : 1;
      await updateDoc(doc(tweetsCollectionRef, id), {
        amountOfLikes: increment(gap),
        usersLikes: activeLike ? arrayRemove(user.uid) : arrayUnion(user.uid),
      });
      setActiveLike(!activeLike);
      setLikesAmount(likesAmount + gap);

      dispatch(updateTweet({ id, userId: user.uid, activeLike }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TweetArticle id={id}>
      <UserWrapperImage>
        <ImageUser alt='user icon' src={defaultUser} />
      </UserWrapperImage>
      <TweetWrapper>
        <UserInfoWrapper>
          <UserTitle>{nameUser}</UserTitle>
          <TweetSubTitle>{`${email} · ${date}`}</TweetSubTitle>
        </UserInfoWrapper>
        <TweetText>{text}</TweetText>
        {image && (
          <ImageWrapper>
            <ImageTwitter alt='tweet image' src={image} />
          </ImageWrapper>
        )}
        <LikesWrapper>
          <LikeImageWrapper onClick={handleLike}>
            <ImageApp alt='like' src={activeLike ? likeFilled : likeOutline} />
          </LikeImageWrapper>
          <LikeText>{likesAmount}</LikeText>
        </LikesWrapper>
      </TweetWrapper>
      <OptionWrapper ref={wrapperRef}>
        <OptionWrapperBtn onClick={handleOpen}>
          <OptionImage alt='option' src={option} />
        </OptionWrapperBtn>
        {isOpen && (
          <OptionList ref={listRef}>
            <OptionItem onClick={handleDeleteTweet}>Delete tweet</OptionItem>
          </OptionList>
        )}
      </OptionWrapper>
    </TweetArticle>
  );
}
