import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledScoreCard } from './ScoreCard.styles';
import getHouseBadge from '@/presentation/utils/get-house-badge/getHouseBagde';

interface Props {
  house: string;
  score: number;
  position: number;
}

const ScoreCard: FC<Props> = ({ house, score, position }): RE => {
  const badge: string = getHouseBadge(house);

  return (
    <StyledScoreCard>
      <h1 className="score-card-title">{`#${position} ${house}`}</h1>
      <img src={badge} alt={`${house} Badge`} className="score-card-image" />
      <h3 className="score-card-score">{score}</h3>
    </StyledScoreCard>
  );
};

export default ScoreCard;
