import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { ScoreState } from '@/presentation/store/features/score/ScoreSlice.types';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/data/store';
import { ActionType } from './Score.types';

// const initialState: ScoreState = {
//   data: [
//     {
//       house: 'Gryffindor',
//       score: 0,
//     },
//     { house: 'Hufflepuff', score: 0 },
//     { house: 'Ravenclaw', score: 0 },
//     { house: 'Slytherin', score: 0 },
//   ],
// };

const initialState: Record<string, number> = {
  Gryffindor: 0,
  Hufflepuff: 0,
  Ravenclaw: 0,
  Slytherin: 0,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    changeScore: (state, action: PayloadAction<ActionType>) => {
      const { house, score, type } = action.payload;
      if (type === 'gain') {
        state[house] += score;
      } else {
        state[house] -= score;
      }
    },
  },
});

export const { changeScore } = scoreSlice.actions;

export const selectScoreData = (state: RootState) => state.score;

export default scoreSlice.reducer;

// reducer with prepare
// changeScore: {
//     reducer: () => {},
//     prepare: (house: string, points: number, type: string) => {
//       return { payload: { house, points, type } };
//     },
//   },
