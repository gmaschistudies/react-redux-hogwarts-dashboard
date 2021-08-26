import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledCharacterModalDetails } from './CharacterModalDetails.styles';
import ScoreChanger from './sub-components/score-changer/ScoreChanger';
import getHouseBadge from '@/presentation/utils/get-house-badge/getHouseBagde';

interface Props {
  name: string;
  house: string;
}

const CharacterModalDetails: FC<Props> = ({ name, house }: Props): RE => {
  const badge: string = getHouseBadge(house);

  return (
    <StyledCharacterModalDetails>
      <div className="character-modal-details-house-container">
        <img
          className="character-modal-details-image"
          src={badge}
          alt={house}
        />
        <h4 className="character-modal-details-house-name">{house}</h4>
      </div>
      <h2 className="character-modal-details-character-name">{name}</h2>
      <ScoreChanger house={house} />
    </StyledCharacterModalDetails>
  );
};

export default CharacterModalDetails;
