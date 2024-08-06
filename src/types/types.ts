export type TTurn = 'X' | 'O';
export type TSelection = TTurn | null;
export type TSquare = {
  children: TSelection;
  selections: TSelection[];
  setSelections: React.Dispatch<React.SetStateAction<TSelection[]>>;
  turn: TTurn;
  setTurn: React.Dispatch<React.SetStateAction<TTurn>>;
  winner: boolean;
  setWinner: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
};
