import { TSelection, TSquare } from '../types/types';

const checkWinner = (selections: TSelection[]) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombinations.some((combination) => {
    const [a, b, c] = combination;
    return selections[a] && selections[a] === selections[b] && selections[a] === selections[c];
  });
};

const Square = ({ children, selections, setSelections, turn, setTurn, winner, setWinner, index }: TSquare) => {
  const changeSelection = () => {
    if (children || winner) return;

    const cloneSelections = [...selections];
    cloneSelections[index] = turn;
    setSelections(cloneSelections);

    const thereIsAWinner = checkWinner(cloneSelections);
    setWinner(thereIsAWinner);
    if (thereIsAWinner) return;

    const newTurn = turn === 'X' ? 'O' : 'X';
    setTurn(newTurn);
  };

  return (
    <div
      onClick={changeSelection}
      className='cursor-pointer border border-slate-400 hover:bg-slate-700 flex justify-center grid content-center'
    >
      <span className='text-slate-400 text-7xl'>{children}</span>
    </div>
  );
};

export default Square;
