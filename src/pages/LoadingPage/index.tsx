import twitter from '@assets/icons/twitter.svg';
import { InfinityLoader } from '@components/InfinityLoader';

import { Icon, LoaderWrapper, SectionLoadingPage } from './styled';

export function LoadingPage() {
  return (
    <SectionLoadingPage>
      <Icon alt='twitter' src={twitter} />
      <LoaderWrapper>
        <InfinityLoader />
      </LoaderWrapper>
    </SectionLoadingPage>
  );
}
