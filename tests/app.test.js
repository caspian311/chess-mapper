const { getMovesForType } = require('../src/app')

describe('getMovesForType', () => {
    describe('rook', () => {
        it('should not contain current location', () => {
            const moves = getMovesForType('r', {row: 7, column: 'a'})

            expect(moves).not.toContainEqual({row: 7, column: 'a'})
        })

        it('should include all rows', () => {
            const moves = getMovesForType('r', {row: 7, column: 'a'})

            expect(moves).toContainEqual({row: 0, column: 'a'})
            expect(moves).toContainEqual({row: 1, column: 'a'})
            expect(moves).toContainEqual({row: 2, column: 'a'})
            expect(moves).toContainEqual({row: 3, column: 'a'})
            expect(moves).toContainEqual({row: 4, column: 'a'})
            expect(moves).toContainEqual({row: 5, column: 'a'})
            expect(moves).toContainEqual({row: 6, column: 'a'})
        })

        it('should include all columns', () => {
            const moves = getMovesForType('r', {row: 7, column: 'a'})

            expect(moves).toContainEqual({row: 7, column: 'b'})
            expect(moves).toContainEqual({row: 7, column: 'c'})
            expect(moves).toContainEqual({row: 7, column: 'd'})
            expect(moves).toContainEqual({row: 7, column: 'e'})
            expect(moves).toContainEqual({row: 7, column: 'f'})
            expect(moves).toContainEqual({row: 7, column: 'g'})
            expect(moves).toContainEqual({row: 7, column: 'h'})
            expect(moves).toContainEqual({row: 7, column: 'h'})
        })
    })
})