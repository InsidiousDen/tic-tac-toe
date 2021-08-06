import React from 'react';
import Square from './Square/Square';
import styles from './Board.module.css';

const Board = ({ squares, onClick, winnerHighlight }) => (
  <div className={styles.root}>
    {squares.map((square, index) => (
      <Square 
        highlightWinner={winnerHighlight && winnerHighlight.includes(index)} 
        key={index} value={square} onClick={() => { onClick(index); }} />
    ))}
  </div>
);

export default Board;
