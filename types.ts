export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
  correctOptionId: string;
  explanation?: string;
}

export enum QuizState {
  START = 'START',
  PLAYING = 'PLAYING',
  FINISHED = 'FINISHED',
}
