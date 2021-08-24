import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledScoreCard } from './ScoreCard.styles';

const ScoreCard: FC = (): RE => {
  return (
    <StyledScoreCard>
      <h1>Position + Name</h1>
      <div>IMG</div>
      <h3>Points</h3>
    </StyledScoreCard>
  );
};

export default ScoreCard;
