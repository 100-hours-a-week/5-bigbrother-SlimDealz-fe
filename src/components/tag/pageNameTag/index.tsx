import React from 'react';
import { PageNameContainer } from './styles';

type Props = {
  pageName: string;
};

const PageNameTag = ({ pageName }: Props) => {
  return (
    <PageNameContainer>
      <div>{pageName}</div>
    </PageNameContainer>
  );
};

export default PageNameTag;
