import { useState } from 'react';
import { TTurn, TSelection } from './types/types';
import Square from './components/Square';

const App = () => {
  const [turn, setTurn] = useState<TTurn>('X');
  const [winner, setWinner] = useState(false);
  const [selections, setSelections] = useState(Array<TSelection>(9).fill(null));

  console.log(turn, winner);

  return (
    <>
      <div className='h-100 w-100 bg-slate-800 grid border border-slate-400 grid-cols-3 grid-rows-3'>
        {selections.map((selection, index) => {
          return (
            <Square
              key={index}
              selections={selections}
              setSelections={setSelections}
              turn={turn}
              setTurn={setTurn}
              winner={winner}
              setWinner={setWinner}
              index={index}
            >
              {selection}
            </Square>
          );
        })}
      </div>
    </>
  );
};

export default App;
