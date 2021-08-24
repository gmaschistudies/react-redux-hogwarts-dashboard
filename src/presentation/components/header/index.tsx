import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledHeaderContainer } from '@/presentation/components/header/index.styles';

const Header: FC = (): RE => {
  return (
    <StyledHeaderContainer>
      <h3>IMG</h3>
      <h1>HP World</h1>
      <h3>Img</h3>
    </StyledHeaderContainer>
  );
};

export default Header;
