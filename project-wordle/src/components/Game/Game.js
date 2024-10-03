import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GameWon from '../GameWon/GameWon';
import GameLost from '../GameLost/GameLost';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [hasWon, setHasWon] = React.useState(false);
  const [hasLost, setHasLost] = React.useState(false);
  function handleNewGuess(newGuess) {    
    const checkGuessResult = checkGuess(newGuess, answer);
    if (checkGuessResult.every(letter => letter.status === "correct")) {
      setHasWon(true);
    }
    const newGuesses = [...guesses, {guess: newGuess, result: checkGuessResult}]
    setGuesses(newGuesses);

    if (newGuesses.length == NUM_OF_GUESSES_ALLOWED) {
      setHasLost(true);
    }
  }
  return (
  <>
    <GuessResults guesses={guesses}/>
    <GuessInput hasWon={hasWon} hasLost={hasLost} handleNewGuess={handleNewGuess}/>
    {hasWon && <GameWon numberOfGuesses={guesses.length}/>}
    {hasLost && <GameLost correctAnswer={answer}/>}
  </>
);
}

export default Game;
