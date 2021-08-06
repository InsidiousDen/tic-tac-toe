import React from 'react';
import { xPlayer } from '../../../constants/values';
import './Square.css';

const Square = ({ value, onClick, highlightWinner }) => {
  const className = `root ${highlightWinner ? 'highlight' : ''}`;
  return (
    <button className={className} onClick={onClick}>
      <div className={`value ${value === null ? '' : (value === xPlayer ? 'cross ' : 'circle ')}`} />
    </button>
  );
};
export default Square;
