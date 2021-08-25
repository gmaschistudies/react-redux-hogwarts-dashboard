export interface ScoreData {
  house: string;
  score: number;
}

export interface ScoreState {
  data: ScoreData[];
}

export interface ActionType {
  house: string;
  score: number;
  type: 'gain' | 'lose';
}
