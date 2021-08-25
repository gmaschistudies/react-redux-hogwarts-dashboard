import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledScoreDashboard } from '@/presentation/components/score-dashboard/ScoreDashboard.styles';
import ScoreCard from '../score-card/ScoreCard';
import { useAppSelector } from '@/data/store/hooks';
import { selectScoreData } from '@/presentation/store/features/score/ScoreSlice';

const ScoreDashboard: FC = (): RE => {
  const scoreData = useAppSelector(selectScoreData);

  return (
    <StyledScoreDashboard>
      {Object.entries(scoreData)
        .sort((houseA, houseB) => houseB[1] - houseA[1])
        .map((house, idx) => {
          return (
            <ScoreCard house={house[0]} score={house[1]} position={idx + 1} />
          );
        })}
    </StyledScoreDashboard>
  );
};

export default ScoreDashboard;

// Object.entries(test).sort((a,b) => b[1] - a[1])
