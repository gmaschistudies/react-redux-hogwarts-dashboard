import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import L10nSlice from '@/data/l10n/L10nSlice';
// eslint-disable-next-line import/no-cycle
import CharactersSlice from '@/presentation/store/features/characters/CharactersSlice';
// eslint-disable-next-line import/no-cycle
import ScoreSlice from '@/presentation/store/features/score/ScoreSlice';

const store = configureStore({
  reducer: {
    l10n: L10nSlice,
    characters: CharactersSlice,
    score: ScoreSlice,
  },
});

export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
