import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
// import { useAppSelector } from '@/data/store/hooks';
// import { selectStudentByName } from '@/presentation/store/features/characters/CharactersSlice';
import { useAppSelector } from '@/data/store/hooks';
import { selectCurrentStudent } from '@/presentation/store/features/characters/CharactersSlice';
import { StyledCharacterModal, Container } from './CharacterModal.styles';
import CharacterModalDetails from './sub-components/character-modal-details/CharacterModalDetails';

const CharacterModal: FC = (): RE => {
  const currentStudent = useAppSelector(selectCurrentStudent);

  if (!currentStudent.name) return <></>;

  const { name, house, image } = currentStudent;

  return (
    <Container>
      <StyledCharacterModal>
        <img
          className="character-modal-character-image"
          src={image}
          alt={name}
        />
        <CharacterModalDetails name={name} house={house!} />
      </StyledCharacterModal>
    </Container>
  );
};

export default CharacterModal;
