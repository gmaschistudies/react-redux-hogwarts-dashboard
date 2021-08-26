import React, { FunctionComponent as FC, ReactElement as RE } from 'react';
import { StyledCharacterCard } from '@/presentation/components/character-card/CharacterCard.styles';
import { useAppDispatch } from '@/data/store/hooks';
import { CurrentStudent } from '@/presentation/store/features/characters/Characters.types';
import { changeCurrentStudent } from '@/presentation/store/features/characters/CharactersSlice';
import scroll from '@/presentation/assets/scroll.png';

interface Props {
  student: CurrentStudent;
}

const CharacterCard: FC<Props> = ({ student }: Props): RE => {
  const dispacth = useAppDispatch();
  const { name, house } = student;

  return (
    <StyledCharacterCard className="character-card">
      <h4 className="character-card-name">{name}</h4>
      <h5 className="character-card-house">{house}</h5>
      <button
        type="button"
        className="character-card-button"
        onClick={() => dispacth(changeCurrentStudent(student))}
      >
        <img src={scroll} alt="scroll" className="character-card-image" />
      </button>
    </StyledCharacterCard>
  );
};

export default CharacterCard;
