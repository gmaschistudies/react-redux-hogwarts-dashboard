import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import {
  StyledMainContentContainer,
  StyledHomeContainer,
} from './index.styles';
import Header from '@/presentation/components/header';
import Footer from '@/presentation/components/footer/Footer';
import CharactersDashboard from '@/presentation/components/characters-dashboard/CharactersDashboard';
import CharacterModal from '@/presentation/components/character-modal/CharacterModal';
import ScoreDashboard from '@/presentation/components/score-dashboard/ScoreDashboard';

const Home: FC = (): RE => {
  return (
    <StyledHomeContainer>
      <Header />
      <CharacterModal />
      <StyledMainContentContainer>
        <ScoreDashboard />
        <CharactersDashboard />
      </StyledMainContentContainer>
      <Footer />
    </StyledHomeContainer>
  );
};

export default Home;
