import React, {
  FunctionComponent as FC,
  ReactElement as RE,
  useState,
} from 'react';
import { useIntl } from 'react-intl';
import { useAppDispatch } from '@/data/store/hooks';
import { changeScore } from '@/presentation/store/features/score/ScoreSlice';
import { changeCurrentStudent } from '@/presentation/store/features/characters/CharactersSlice';
import { StyledScoreChanger } from './ScoreChanger.styles';

interface Props {
  house: string;
}

const ScoreChanger: FC<Props> = ({ house }: Props): RE => {
  const dispatch = useAppDispatch();
  const [score, setScore] = useState<number>(0);
  const [scoreAttributed, setScoreAttributed] = useState<
    'gain' | 'lose' | null
  >(null);

  const intl = useIntl();

  const handleGainClick = (): void => {
    dispatch(changeScore({ house, score, type: 'gain' }));
    setScoreAttributed('gain');
  };

  const handleLoseClick = (): void => {
    dispatch(changeScore({ house, score, type: 'lose' }));
    setScoreAttributed('lose');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setScore(parseInt(e.target.value, 10));
  };

  const handleDoneClick = (): void => {
    dispatch(changeCurrentStudent({}));
  };

  let renderedButtonsContainer: RE;

  if (scoreAttributed !== null) {
    renderedButtonsContainer = (
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
          {intl.formatMessage({ id: 'character.modal.done.button' })}
        </button>
      </div>
    );
  } else {
    renderedButtonsContainer = (
      <>
        <button
          type="button"
          className="character-modal-details-button gain-button"
          onClick={() => handleGainClick()}
        >
          {intl.formatMessage({ id: 'character.modal.gain.button' })}
        </button>
        <button
          type="button"
          className="character-modal-details-button lose-button"
          onClick={() => handleLoseClick()}
        >
          {intl.formatMessage({ id: 'character.modal.lose.button' })}
        </button>
      </>
    );
  }

  return (
    <StyledScoreChanger>
      <input
        type="number"
        min={0}
        className="character-modal-details-input"
        value={score}
        onChange={(e) => handleChange(e)}
        disabled={scoreAttributed !== null}
      />
      <div className="character-modal-details-buttons-container">
        {renderedButtonsContainer}
      </div>
    </StyledScoreChanger>
  );
};

export default ScoreChanger;
