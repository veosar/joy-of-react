import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({guesses}) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map(index => (
        <Guess key={crypto.randomUUID()} guess={guesses[index]}/>
      ))}
</div>
  );
}

export default GuessResults;
