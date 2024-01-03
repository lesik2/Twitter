import defaultUser from '@assets/images/defaultUser.png';
import likeOutline from '@assets/icons/outline/like.svg';
import likeFilled from '@assets/icons/fill/like.svg';
import option from '@assets/icons/option.svg';
import { useCallback, useState } from 'react';
import { useAppSelector, useAppDispatch } from '@hooks/redux';
import { deleteTweetFromFirebase, likeTweetFromFirebase } from '@db/tweet';
import { deleteTweet, updateTweet } from '@store/reducers/tweetsSlice';
import { useCloseList } from '@hooks/useCloseList';
import { ITweetComponent } from '@customTypes/index';

import {
  ImageTwitter,
  ImageWrapper,
  LikeImageBtn,
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
  Wrapper,
} from './styled';

import { ImageApp, ImageUser, UserTitle } from '../ui';

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
    if (user.uid === authorId) {
      setIsOpen(!isOpen);
    }
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const [wrapperRef, listRef] = useCloseList(handleClose);
  const handleDeleteTweet = async () => {
    handleClose();
    await deleteTweetFromFirebase(id);
    dispatch(deleteTweet(id));
  };

  const handleLike = async () => {
    const { uid } = user;
    if (uid) {
      const gap = activeLike ? -1 : 1;
      setActiveLike(!activeLike);
      setLikesAmount(likesAmount + gap);
      await likeTweetFromFirebase(id, uid, gap);

      dispatch(updateTweet({ id, userId: uid, gap }));
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
          <LikeImageBtn onClick={handleLike}>
            <ImageApp alt='like' src={activeLike ? likeFilled : likeOutline} />
          </LikeImageBtn>
          <LikeText>{likesAmount}</LikeText>
        </LikesWrapper>
      </TweetWrapper>
      <Wrapper>
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
      </Wrapper>
    </TweetArticle>
  );
}
