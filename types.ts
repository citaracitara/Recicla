
export enum GameState {
  HOME,
  TUTORIAL,
  PLAYING,
  GALLERY
}

export enum BinCategory {
  ORGANIC = 'ORGANIC',
  NON_RECYCLABLE = 'NON_RECYCLABLE',
  RECYCLABLE = 'RECYCLABLE'
}

export interface WasteItem {
  id: string;
  name: string;
  emoji: string;
  category: BinCategory;
  explanation: string;
}

export interface Sticker {
  id: string;
  name: string;
  emoji: string;
}

export interface Level {
  level: number;
  bins: BinCategory[];
  items: string[];
  title: string;
  introMessage: string;
}
