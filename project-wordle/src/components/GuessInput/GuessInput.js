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
      <input id="guess-input" disabled={hasWon || hasLost} value={guess} onChange={(event) => setGuess(event.target.value.toUpperCase())} type="text" minLength={5} maxLength={5}   pattern="[a-zA-Z]{5}"
  title="5 letter word" required />
    </form>
  );
}

export default GuessInput;
