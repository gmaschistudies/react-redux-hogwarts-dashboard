import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledCharacterCard } from '@/presentation/components/character-card/CharacterCard.styles';

const CharacterCard: FC = (): RE => {
  return (
    <StyledCharacterCard className="character-card">
      <h4>Name</h4>
      <h5>House</h5>
      <h6>Image</h6>
    </StyledCharacterCard>
  );
};

export default CharacterCard;
