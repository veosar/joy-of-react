import React from 'react';

function GameLost({correctAnswer}) {
  return (
    <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{correctAnswer}</strong>.</p>
    </div>
  );
}

export default GameLost;
