import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledCharacterCard } from '@/presentation/components/character-card/CharacterCard.styles';

const CharacterCard: FC = (): RE => {
  return (
    <StyledCharacterCard className="character-card">
      <h4 className="character-card-name">Name</h4>
      <h5 className="character-card-house">House</h5>
      <h6 className="character-card-img">Image</h6>
    </StyledCharacterCard>
  );
};

export default CharacterCard;
