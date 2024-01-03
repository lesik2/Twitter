import search from '@assets/icons/search.svg';
import defaultUser from '@assets/images/defaultUser.png';
import { CONSTANTS, ROUTES } from '@constants/index';
import { useEffect, useState } from 'react';
import { useDebounce } from '@hooks/useDebounce';
import { UserState } from '@customTypes/models';
import { getUsersByName } from '@db/user';
import { FooterSearch } from '@components/FooterSearch/index';
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
} from '@components/ui/search';

import { ImageApp, ImageUser } from '../ui';
import { ISearch } from '../SearchTweets';

export function SearchUsers({onClose}: ISearch) {
  const [users, setUsers] = useState<UserState[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (debouncedValue.length > 0) {
      getUsersByName(debouncedValue)
        .then((usersFromDb) => setUsers(usersFromDb))
        .catch((error) => console.error(error));
    } else {
      setUsers([]);
    }
  }, [debouncedValue]);

  return (
    <SearchSection>
      <SearchWrapper>
        <SearchBtn>
          <ImageApp alt='search' src={search} />
        </SearchBtn>
        <SearchInput
          value={searchValue}
          onChange={handleInput}
          placeholder={CONSTANTS.SEARCH_PLACEHOLDER_USERS}
        />
      </SearchWrapper>
      {users.length > 0 && (
        <SearchResultsWrapper>
          <SearchResultText>{CONSTANTS.SEARCH_TITLE}</SearchResultText>
          {users.map((user) => (
            <UserWrapper to={`${ROUTES.USERS}${user.uid}`} key={user.uid} onClick={onClose}>
              <ImageWrapper>
                <ImageUser alt='user icon' src={defaultUser} />
              </ImageWrapper>
              <UserInfoWrapper>
                <UserTitle>{user.displayName}</UserTitle>
                <UserSubtitle>{user.email}</UserSubtitle>
              </UserInfoWrapper>
              <FollowBtn>Follow</FollowBtn>
            </UserWrapper>
          ))}
        </SearchResultsWrapper>
      )}
      <FooterSearch />
    </SearchSection>
  );
}
