import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { useIntl } from 'react-intl';
import {
  StyledCharactersDashboardHeader,
  Container,
} from './CharactersDashboardHeader.styles';

const CharactersDashboardHeader: FC = (): RE => {
  const intl = useIntl();

  return (
    <Container>
      <h1>{intl.formatMessage({ id: 'home.characters.dashboard.title' })}</h1>
      <StyledCharactersDashboardHeader className="characters-dashboard-header">
        <h2>
          {intl.formatMessage({
            id: 'home.characters.dashboard.header.name.title',
          })}
        </h2>
        <h3>
          {intl.formatMessage({
            id: 'home.characters.dashboard.header.house.title',
          })}
        </h3>
      </StyledCharactersDashboardHeader>
    </Container>
  );
};

export default CharactersDashboardHeader;
