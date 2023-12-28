import { Header } from './components/Header';
import { ProfileSection, SearchSection } from './styled';

import { TweetForm } from '@//components/TweetForm';

export function Profile() {
  return (
    <>
      <ProfileSection>
        <Header />
        <TweetForm />
      </ProfileSection>
      <SearchSection>Search</SearchSection>
    </>
  );
}
