import { Header } from './components/Header';
import { HomeSection, SearchSection } from './styled';

export function Home() {
  return <>
    <HomeSection>
      <Header />
    </HomeSection>

    <SearchSection />
  </>
}
