import { Header } from './components/Header';
import { ProfileSection, SearchSection } from './styled';

export function Profile() {
  return (
    <>
      <ProfileSection>
        <Header />
      </ProfileSection>
      <SearchSection>Search</SearchSection>
    </>
  ) 
}
