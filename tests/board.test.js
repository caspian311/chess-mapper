import Board from 'board';

test('initial board should display correctly', () => {
  let board = new Board();
  expect(board.readableBoard()).toBe(`
RP0000pr
KP0000pk
BP0000pb
QP0000pk
KP0000pq
BP0000pb
KP0000pk
RP0000pr
    `.trim());
});

test('board can be initialized from an array of arrays', () => {
  let board = new Board([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]]);
  expect(board.readableBoard()).toBe(`
00000000
00000000
00000000
00000000
00000000
00000000
00000000
00000000
    `.trim());
});

test('board should evaluate validity of proposed move', () => {
  let board = new Board();

  expect(board.validateMove()).toBe(false);
});
