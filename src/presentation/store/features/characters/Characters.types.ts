export interface CharacterData {
  name?: string | undefined;
  species?: string | undefined;
  gender?: string | undefined;
  house?: string | undefined;
  dateOfBirth?: string | undefined;
  yearOfBirth?: number | undefined;
  ancestry?: string | undefined;
  eyeColour?: string | undefined;
  hairColour?: string | undefined;
  wand?:
    | {
        wood?: string | undefined;
        core?: string | undefined;
        length?: number | undefined;
      }
    | undefined;
  patronus?: string | undefined;
  hogwartsStudent?: boolean | undefined;
  hogwartsStaff?: boolean | undefined;
  actor?: string | undefined;
  alive?: boolean | undefined;
  image?: string | undefined;
}

export interface CurrentStudent {
  name?: string;
  house?: string;
  image?: string;
}

export interface CharactersState {
  data: CharacterData[];
  currentStudent: CurrentStudent;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}
