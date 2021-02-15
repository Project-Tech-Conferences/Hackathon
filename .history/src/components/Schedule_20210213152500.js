import React from "react"
import Fade from "react-reveal/Fade"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function iterativeRepair(size) {
  var solution = _repairLoop(size)
  return solution
}

function _repairLoop(size) {
  var numConflicts = Number.POSITIVE_INFINITY
  var totalIterations = 0
  var board
  while (numConflicts > 0) {
    var iterations = 0
    board = generateRandomBoard(size)
    while (iterations < 30) {
      for (var i = 0; i < board.length; i++) minimizeConflicts(board, i)
      numConflicts = totalConflicts(board)
      iterations += board.length
      if (numConflicts === 0) break
    }
    totalIterations += iterations
  }
  return board
}

function generateRandomBoard(size) {
  var board = []
  for (var i = 0; i < size; i++) board.push(i)
  return fisherYatesShuffle(board)
}

function minimizeConflicts(board, col) {
  var minConflicts = Number.POSITIVE_INFINITY
  var originalRow = board[col]
  var minRow
  for (var row = 0; row < board.length; row++) {
    board[col] = row
    var conflicts = totalConflicts(board)
    if (conflicts < minConflicts) {
      minConflicts = conflicts
      minRow = row
    }
  }
  if (originalRow !== minRow) {
  }
  board[col] = minRow
}

function totalConflicts(board) {
  return diagConflictCount(board) + rowConflictCount(board)
}

function diagConflictCount(board) {
  // assumes all unique rows
  var downDiags = []
  while (downDiags.length < board.length * 2) downDiags.push(false)
  var upDiags = downDiags.slice()
  var numConflicts = 0
  for (var i = 0; i < board.length; i++) {
    var downDiag = i - board[i] + (board.length - 1)
    if (!downDiags[downDiag]) {
      downDiags[downDiag] = true
    } else {
      numConflicts++
    }

    var upDiag = i + board[i]
    if (!upDiags[upDiag]) {
      upDiags[upDiag] = true
    } else {
      numConflicts++
    }
  }
  return numConflicts
}

function rowConflictCount(board) {
  var row = []
  var numConflicts = 0
  while (row.length < board.length) row.push(false)
  for (var i = 0; i < board.length; i++) {
    if (row[board[i]]) {
      numConflicts++
    } else {
      row[board[i]] = true
    }
  }
  return numConflicts
}

function fisherYatesShuffle(arr) {
  for (var i = 0; i < arr.length; i++) {
    var j = Math.floor(Math.random() * (arr.length - i) + i)
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  return arr
}

const Schedule = () => {
  return (
    <div className="section" id="schedule">
      <div className="container">
        <div className="schedule-container">
          <Fade top>
            <h1 className="schedule-header">Schedule</h1>
          </Fade>

          <Fade left>
            <div className="friday day">
              <h2 className="friday-date">FEBRUARY 19TH</h2>
              <div className="friday-schedule">
                <div className="friday-time">5:00 pm</div>
                <div>Registration/sign in</div>
                <div className="friday-time">5:30 pm</div>
                <div>Opening ceremony</div>
                <div className="friday-time">6:00 pm</div>
                <div>Github Workshop</div>
                <div className="friday-time">7:00 pm</div>
                <div>Begin hackathon</div>
              </div>
            </div>
          </Fade>

          <Fade right>
            <div className="saturday day">
              <h2 className="saturday-date">FEBRUARY 20TH</h2>
              <div className="saturday-schedule">
                <div className="saturday-time">8:30 am</div>
                <div>Day opening ceremony</div>

                <div className="saturday-time">11:00 am</div>
                <div>Program Management - Microsoft</div>
                <div className="saturday-time">12:00 pm</div>
                <div>Networking session</div>
                <div className="saturday-time">1:00 pm</div>
                <div>Lunch</div>
                <div className="saturday-time">2:00 pm</div>
                <div>Women in Tech - Google</div>
                <div className="saturday-time">3:00 pm</div>
                <div>LinkedIn Networking Workshop</div>
                <div className="saturday-time">7:00 pm</div>
                <div>Social</div>
              </div>
            </div>
          </Fade>

          <Fade left>
            <div className="sunday day">
              <h2 className="sunday-date">FEBRUARY 21ST</h2>
              <div className="sunday-schedule">
                <div className="sunday-time">7:30 am</div>
                <div>Day opening ceremony</div>
                <div className="sunday-time">10:00 am</div>
                <div>Final submissions due</div>
                <div className="sunday-time">11:00 am</div>
                <div>iOS Development</div>
                <div className="sunday-time">12:00 pm</div>
                <div>Social</div>
                <div className="sunday-time">1:00pm</div>
                <div>Python Workshop</div>
                <div className="sunday-time">3:00 pm</div>
                <div>Closing ceremony</div>
              </div>
            </div>
          </Fade>
          <div className="button-div">
            <button onClick={() => scrollTo("#home")} className="top-button">
              Back to Top &nbsp; <FontAwesomeIcon icon="chevron-up" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
