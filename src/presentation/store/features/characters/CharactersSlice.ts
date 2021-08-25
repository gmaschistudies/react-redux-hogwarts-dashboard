import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { RootState } from '@/data/store';
import { CharactersState, CurrentStudent } from './Characters.types';

const initialState: CharactersState = {
  data: [],
  currentStudent: {},
  status: 'idle',
  error: null,
};

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async () => {
    const response = await axios.get(
      'http://hp-api.herokuapp.com/api/characters'
    );
    return response.data;
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    changeCurrentStudent: (state, action: PayloadAction<CurrentStudent>) => {
      state.currentStudent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = state.data.concat(action.payload);
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const selectAllStudents = (state: RootState) =>
  state.characters.data.filter(
    (character) => character.hogwartsStudent === true
  );

export const selectStudentByName = (state: RootState, name: string) => {
  return state.characters.data.find((character) => name === character.name);
};

export const selectCurrentStudent = (state: RootState) =>
  state.characters.currentStudent;

export const { changeCurrentStudent } = charactersSlice.actions;

export default charactersSlice.reducer;
