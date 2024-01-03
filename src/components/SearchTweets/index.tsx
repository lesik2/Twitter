import search from '@assets/icons/search.svg';
import defaultUser from '@assets/images/defaultUser.png';
import { CONSTANTS, ROUTES } from '@constants/index';
import { useEffect, useState } from 'react';
import { useDebounce } from '@hooks/useDebounce';
import { FooterSearch } from '@components/FooterSearch/index';
import { ITweetComponent } from '@customTypes/index';
import { useAppSelector } from '@hooks/redux';
import { getTweetsByText } from '@db/tweetsForAllUsers';
import {
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
} from '@components/ui/search';

import { ImageApp, ImageUser } from '../ui';

export interface ISearch{
  onClose: () => void;
}
export function SearchTweets({onClose}: ISearch) {
  const [tweets, setTweets] = useState<ITweetComponent[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue);
  const user = useAppSelector((state) => state.userReducer);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const { uid } = user;
    if (debouncedValue.length > 0 && uid) {
      getTweetsByText(uid, debouncedValue)
        .then((tweetsFromDb) => setTweets(tweetsFromDb))
        .catch((error) => console.error(error));
    } else {
      setTweets([]);
    }
  }, [debouncedValue, user]);

  return (
    <SearchSection>
      <SearchWrapper>
        <SearchBtn>
          <ImageApp alt='search' src={search} />
        </SearchBtn>
        <SearchInput
          value={searchValue}
          onChange={handleInput}
          placeholder={CONSTANTS.SEARCH_PLACEHOLDER_TWITTER}
        />
      </SearchWrapper>
      {tweets.length > 0 && (
        <SearchResultsWrapper>
          <SearchResultText>{CONSTANTS.SEARCH_TITLE}</SearchResultText>
          {tweets.map((tweet) => (
            <UserWrapper to={`${ROUTES.TWEETS}${tweet.id}`} key={tweet.id} onClick={onClose}>
              <ImageWrapper>
                <ImageUser alt='user icon' src={defaultUser} />
              </ImageWrapper>
              <UserInfoWrapper>
                <UserTitle>{tweet.nameUser}</UserTitle>
                <UserSubtitle>{tweet.email}</UserSubtitle>
              </UserInfoWrapper>
            </UserWrapper>
          ))}
        </SearchResultsWrapper>
      )}
      <FooterSearch />
    </SearchSection>
  );
}
