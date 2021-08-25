import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledHeaderContainer } from '@/presentation/components/header/index.styles';
import HogwartsLogo from '@/presentation/assets/hogwarts.png';

const Header: FC = (): RE => {
  return (
    <StyledHeaderContainer>
      <img
        src={HogwartsLogo}
        alt="Hogwarts Logo"
        className="header-hogwarts-logo"
      />
      <h1 className="header-title">HP World</h1>
    </StyledHeaderContainer>
  );
};

export default Header;
