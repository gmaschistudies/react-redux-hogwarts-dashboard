import React, {
  FunctionComponent as FC,
  ReactElement as RE,
  useState,
} from 'react';
import { useAppDispatch } from '@/data/store/hooks';
import { changeScore } from '@/presentation/store/features/score/ScoreSlice';
import { StyledCharacterModalDetails } from './CharacterModalDetails.styles';
import { changeCurrentStudent } from '@/presentation/store/features/characters/CharactersSlice';
import GryffindorBadge from '@/presentation/assets/gryffindor.png';
import HufflepuffBadge from '@/presentation/assets/hufflepuff.png';
import RavenclawBadge from '@/presentation/assets/ravenclaw.png';
import SlytherinBadge from '@/presentation/assets/slytherin.png';

interface Props {
  name: string;
  house: string;
}

const CharacterModalDetails: FC<Props> = ({ name, house }: Props): RE => {
  const dispatch = useAppDispatch();
  const [score, setScore] = useState<number>(0);
  const [scoreAttributed, setScoreAttributed] = useState<
    'gain' | 'lose' | null
  >(null);

  let badge;

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

  const handleGainClick = () => {
    dispatch(changeScore({ house, score, type: 'gain' }));
    setScoreAttributed('gain');
  };

  const handleLoseClick = () => {
    dispatch(changeScore({ house, score, type: 'lose' }));
    setScoreAttributed('lose');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setScore(parseInt(e.target.value, 10));
  };

  const handleDoneClick = () => {
    dispatch(changeCurrentStudent({}));
  };

  let renderedBottomPart: RE;

  if (scoreAttributed !== null) {
    renderedBottomPart = (
      <div className="character-modal-details-results-container">
        <h3
          className={`character-modal-details-results-score ${
            scoreAttributed === 'gain' ? 'positive-result' : 'negative-result'
          }`}
        >{`${scoreAttributed === 'gain' ? '+' : '-'} ${score}`}</h3>
        <button
          className="character-modal-details-button done-button"
          type="button"
          onClick={() => handleDoneClick()}
        >
          Done
        </button>
      </div>
    );
  } else {
    renderedBottomPart = (
      <>
        <button
          type="button"
          className="character-modal-details-button gain-button"
          onClick={() => handleGainClick()}
        >
          Gain
        </button>
        <button
          type="button"
          className="character-modal-details-button lose-button"
          onClick={() => handleLoseClick()}
        >
          Lose
        </button>
      </>
    );
  }

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
      <input
        type="number"
        defaultValue={0}
        min={0}
        className="character-modal-details-input"
        value={score}
        onChange={(e) => handleChange(e)}
        disabled={scoreAttributed !== null}
      />
      <div className="character-modal-details-buttons-container">
        {renderedBottomPart}
      </div>
    </StyledCharacterModalDetails>
  );
};

export default CharacterModalDetails;
