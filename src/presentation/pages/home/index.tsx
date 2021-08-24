import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import {
  StyledMainContentContainer,
  StyledHomeContainer,
  StyledScoreCardContainer,
} from './index.styles';
import Header from '@/presentation/components/header';
import ScoreCard from '@/presentation/components/score-card/ScoreCard';
import Footer from '@/presentation/components/footer/Footer';
import CharactersDashboard from '@/presentation/components/characters-dashboard/CharactersDashboard';

const Home: FC = (): RE => {
  return (
    <StyledHomeContainer>
      <Header />
      <StyledMainContentContainer>
        <StyledScoreCardContainer>
          <ScoreCard />
          <ScoreCard />
          <ScoreCard />
          <ScoreCard />
        </StyledScoreCardContainer>
        <CharactersDashboard />
      </StyledMainContentContainer>
      <Footer />
    </StyledHomeContainer>
  );
};

export default Home;