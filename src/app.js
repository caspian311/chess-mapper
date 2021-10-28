const tree = {}

const run = () => {
  tree.state = 'rnbqkbnrppppppppp                                PPPPPPPPRNBQKBNR'
  tree.moves = generateMoves(tree.state, 0)
}

const generateMoves = (state, turn) => {
  const possibleMoves = getPossibleMoves(state, turn)
  //validMoves
  //newStates
}

const getPossibleMoves = (state, turn) => {
  const possibleMoves = []
  const board = createBoard(state)
  if (turn) {
    possibleMoves.push(board.blackPieces.map((piece) => {
      return getMovesForType(piece.type, piece.location, turn)
    }))
  } else {
    possibleMoves.push(board.whitePieces.map())
  }
  return possibleMoves
}

const translateColumn = (column) => {
  const columns = 'abcdefgh'.split('')
  return columns[column]
}

const getMovesForType = (type, location, turn) => {
  const moves = []
  switch(type) {
    case 'r':
      for (var i=0; i<8; i++) {
        if (i === location.row) {
          continue
        }
        const move = { row: i, column: location.column}
        moves.push(move)
      }
      for (var i=0; i<8; i++) {
        const column = translateColumn(i)
        if (column === location.column) {
          continue
        }
        const move = { row: location.row, column: column}
        moves.push(move)
      }
      break;
    case 'n':
      break;
    case 'b':
      break;
    case 'q':
      break;
    case 'k':
      break;
    case 'p':
      break;
  }
  return moves
}

module.exports = { getMovesForType, run }
