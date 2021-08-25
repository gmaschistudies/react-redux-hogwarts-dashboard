import React, {
  FunctionComponent as FC,
  ReactElement as RE,
  useEffect,
} from 'react';
import { StyledCharactersDashboard } from './CharactersDashboard.styles';
import CharacterCard from '../character-card/CharacterCard';
import CharactersDashboardHeader from './sub-components/characters-dashboard-header/CharactersDashboardHeader';
import { useAppDispatch, useAppSelector } from '@/data/store/hooks';
import {
  fetchCharacters,
  selectAllStudents,
} from '@/presentation/store/features/characters/CharactersSlice';

const CharacterDashboard: FC = (): RE => {
  const dispatch = useAppDispatch();
  const charactersStatus = useAppSelector((state) => state.characters.status);
  useEffect(() => {
    if (charactersStatus === 'idle') {
      dispatch(fetchCharacters());
    }
  }, [charactersStatus, dispatch]);

  const allStudents = useAppSelector(selectAllStudents);

  return (
    <StyledCharactersDashboard>
      <CharactersDashboardHeader />
      {allStudents
        .sort((studentA, studentB) =>
          studentA.house!.localeCompare(studentB.house!)
        )
        .map((student) => {
          const { name, house, image } = student;
          return <CharacterCard key={name} student={{ name, house, image }} />;
        })}
    </StyledCharactersDashboard>
  );
};

export default CharacterDashboard;
