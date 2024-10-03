import React from 'react';

function GuessInput({hasWon, hasLost, handleNewGuess}) {
  const [guess, setGuess] = React.useState('');
  return (    
    <form onSubmit={(event) => {
      event.preventDefault();
      handleNewGuess(guess);
      setGuess('');
    }}>
      <label htmlFor="guess-input">Enter guess:</label><br/>
      <input id="guess-input" disabled={hasWon || hasLost} value={guess} onChange={(event) => setGuess(event.target.value.toUpperCase())} type="text" required pattern="^.{5}$" />
    </form>
  );
}

export default GuessInput;
