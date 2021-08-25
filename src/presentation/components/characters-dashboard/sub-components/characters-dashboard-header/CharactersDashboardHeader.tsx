import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import {
  StyledCharactersDashboardHeader,
  Container,
} from './CharactersDashboardHeader.styles';

const CharactersDashboardHeader: FC = (): RE => {
  return (
    <Container>
      <h1>Students Board</h1>
      <StyledCharactersDashboardHeader className="characters-dashboard-header">
        <h2>Student</h2>
        <h3>House</h3>
      </StyledCharactersDashboardHeader>
    </Container>
  );
};

export default CharactersDashboardHeader;
