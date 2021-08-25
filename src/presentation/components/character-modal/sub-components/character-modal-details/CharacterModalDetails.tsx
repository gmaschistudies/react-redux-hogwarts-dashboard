import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledCharacterModalDetails } from './CharacterModalDetails.styles';

const CharacterModalDetails: FC = (): RE => {
  return (
    <StyledCharacterModalDetails>
      <div className="character-modal-details-house-container">
        <h3 className="character-modal-details-img">Img</h3>
        <h4 className="character-modal-details-house-name">House Name</h4>
      </div>
      <h2 className="character-modal-details-character-name">Character Name</h2>
      <input
        type="number"
        value={0}
        className="character-modal-details-input"
      />
      <div className="character-modal-details-buttons-container">
        <button
          type="button"
          className="character-modal-details-button gain-button"
        >
          Gain
        </button>
        <button
          type="button"
          className="character-modal-details-button lose-button"
        >
          Lose
        </button>
      </div>
    </StyledCharacterModalDetails>
  );
};

export default CharacterModalDetails;
