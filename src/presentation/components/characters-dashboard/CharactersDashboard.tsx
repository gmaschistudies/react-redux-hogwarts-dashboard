import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledCharactersDashboard } from '@/presentation/components/characters-dashboard/CharactersDashboard.styles';
import CharacterCard from '../character-card/CharacterCard';
import CharactersDashboardHeader from './sub-components/characters-dashboard-header/CharactersDashboardHeader';

const CharacterDashboard: FC = (): RE => {
  return (
    <StyledCharactersDashboard>
      <CharactersDashboardHeader />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
      <CharacterCard />
    </StyledCharactersDashboard>
  );
};

export default CharacterDashboard;
