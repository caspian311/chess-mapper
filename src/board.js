class Board {
  constructor(positions) {
    const defaultPositions = [
      ['R','P','0','0','0','0','p','r'],
      ['K','P','0','0','0','0','p','k'],
      ['B','P','0','0','0','0','p','b'],
      ['Q','P','0','0','0','0','p','k'],
      ['K','P','0','0','0','0','p','q'],
      ['B','P','0','0','0','0','p','b'],
      ['K','P','0','0','0','0','p','k'],
      ['R','P','0','0','0','0','p','r']];
    this.positions = positions || defaultPositions;
  }

  readableBoard() {
    return this.positions.map((row) => { return row.join('');}).join('\n'); 
  }

  validateMove() {
    return false;
  }
}

export default Board;
