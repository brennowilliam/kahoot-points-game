export type Bonus = { points: number; qty: number };

export type BonusRewards = { [key: string]: Bonus };

export type BoardItem = {
  id: number;
  letter: string;
  unitPoints: number;
  bonusPoints?: number;
  qty?: number;
};

export interface GameState {
  readonly totalScore: number;
  readonly items: BoardItem[] | [];
  readonly selectedItems: BoardItem[];
  readonly weekBonusRewards?: BonusRewards;
}

export type Action = { type: string; payload: any };
export type DispatchAction = (action: Action) => Action;
