import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledScoreCard } from './ScoreCard.styles';
import GryffindorBadge from '@/presentation/assets/gryffindor.png';
import HufflepuffBadge from '@/presentation/assets/hufflepuff.png';
import RavenclawBadge from '@/presentation/assets/ravenclaw.png';
import SlytherinBadge from '@/presentation/assets/slytherin.png';

interface Props {
  house: string;
  score: number;
  position: number;
}

const ScoreCard: FC<Props> = ({ house, score, position }): RE => {
  let badge: string;

  switch (house) {
    case 'Gryffindor':
      badge = GryffindorBadge;
      break;
    case 'Hufflepuff':
      badge = HufflepuffBadge;
      break;
    case 'Ravenclaw':
      badge = RavenclawBadge;
      break;
    case 'Slytherin':
      badge = SlytherinBadge;
      break;
    default:
      badge = '';
  }

  return (
    <StyledScoreCard>
      <h1 className="score-card-title">{`#${position} ${house}`}</h1>
      <img src={badge} alt={`${house} Badge`} className="score-card-image" />
      <h3 className="score-card-score">{score}</h3>
    </StyledScoreCard>
  );
};

export default ScoreCard;
