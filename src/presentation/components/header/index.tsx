import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useIntl } from 'react-intl';
import { StyledHeaderContainer } from '@/presentation/components/header/index.styles';
import HogwartsLogo from '@/presentation/assets/hogwarts.png';

const Header: FC = (): RE => {
  const intl = useIntl();
  return (
    <StyledHeaderContainer>
      <img
        src={HogwartsLogo}
        alt="Hogwarts Logo"
        className="header-hogwarts-logo"
      />
      <h1 className="header-title">
        {intl.formatMessage({ id: 'home.header.title' })}
      </h1>
    </StyledHeaderContainer>
  );
};

export default Header;
