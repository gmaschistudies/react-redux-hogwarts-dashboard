import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledCharacterModal, Container } from './CharacterModal.styles';
import CharacterModalDetails from './sub-components/character-modal-details/CharacterModalDetails';

const CharacterModal: FC = (): RE => {
  return (
    <Container>
      <StyledCharacterModal>
        <div className="character-modal-character-image">Img</div>
        <CharacterModalDetails />
      </StyledCharacterModal>
    </Container>
  );
};

export default CharacterModal;
