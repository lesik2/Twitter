import { useParams } from 'react-router-dom';

import { UserSection } from './styled';

export function User() {
  const params = useParams();

  return <UserSection>{params.id}</UserSection>;
}
