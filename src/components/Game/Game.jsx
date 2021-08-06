import React, { useState, useEffect } from 'react'
import { calculateWinner } from '../../helpers/helpers';
import Board from '../Board/Board';
import styles from './Game.module.css'
import { xPlayer, oPlayer, score, start } from '../../constants/values'
import Modal from '../Modal/Modal';

const Game = () => {

  const [xName, setXName] = useState("X");
  const [oName, setOName] = useState("O");
  // useEffect(() => {
  //   const xName = prompt('First player name', 'X')
  //   const oName = prompt('Second player name', 'O')
  //   setXName(xName)
  //   setOName(oName)
  // }, []) 

  const squareAmount = 9
  const cleanBoard = Array(squareAmount).fill(null)

  const [board, setBoard] = useState(cleanBoard)
  const [xIsNext, setXIsNext] = useState(true)
  const [xScore, setXScore] = useState(0)
  const [oScore, setOScore] = useState(0)
  const [moves, setMoves] = useState(0)

  const winningInfo = calculateWinner(board);
  const winner = winningInfo.winner;
  const winnerHighlight = winningInfo.line;

  const handleClick = (index) => {
    const newBoard = [...board]
    if (winner || newBoard[index]) return
    newBoard[index] = xIsNext ? xPlayer : oPlayer
    setBoard(newBoard)
    setXIsNext(!xIsNext)
    setMoves(moves + 1)
  }

  const scoreCounter = () => {
    if (winner === xPlayer) {
      setXScore(xScore + 1)

    } else if (winner === oPlayer) {
      setOScore(oScore + 1)
    }
    else return
  }

  const gameOver = () => {
    setBoard(cleanBoard)
    setMoves(0)
    scoreCounter(winner)
  }
  if (moves === squareAmount && !winner) {
    alert('Ничья')
    gameOver()
  }

  const handleXName = (e) => setXName(e.target.value)
  const handleOName = (e) => setOName(e.target.value)

  const [modalActive, setModalActive] = useState(true)

  return (
    <>
      <div className={styles.root}>
        <Board
          squares={board}
          onClick={handleClick}
          winnerHighlight={winnerHighlight}
        />
        <div className={styles.wrapper}>
          <div className={styles.score}>
            <div>{score}</div>
            <div>{xName} : {xScore}</div>
            <div>{oName} : {oScore}</div>
          </div>
          <div className={styles.score}>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? xPlayer : oPlayer)}</div>
          <button className={styles.button} onClick={() => setModalActive(true)}>Change Name</button>
          <button className={styles.button} onClick={gameOver}>{start}</button>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} handleXName={handleXName} handleOName={handleOName}></Modal>
    </>
  )
}

export default Game;