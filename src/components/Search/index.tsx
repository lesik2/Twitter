import search from '@assets/icons/search.svg';
import defaultUser from '@assets/images/defaultUser.png';

import {
  FollowBtn,
  ImageWrapper,
  SearchBtn,
  SearchInput,
  SearchResultText,
  SearchResultsWrapper,
  SearchSection,
  SearchWrapper,
  UserInfoWrapper,
  UserSubtitle,
  UserTitle,
  UserWrapper,
} from './styled';

import { ImageApp, ImageUser } from '../ui';

export function Search() {
  return (
    <SearchSection>
      <SearchWrapper>
        <SearchBtn>
          <ImageApp alt='search' src={search} />
        </SearchBtn>
        <SearchInput placeholder='Search Twitter' />
      </SearchWrapper>
      <SearchResultsWrapper>
        <SearchResultText>Search results</SearchResultText>
        <UserWrapper>
          <ImageWrapper>
            <ImageUser alt='user icon' src={defaultUser} />
          </ImageWrapper>
          <UserInfoWrapper>
            <UserTitle>Alex</UserTitle>
            <UserSubtitle>lesha@gmail.com</UserSubtitle>
          </UserInfoWrapper>
          <FollowBtn>Follow</FollowBtn>
        </UserWrapper>
      </SearchResultsWrapper>
    </SearchSection>
  );
}
