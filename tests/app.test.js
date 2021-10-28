const { getMovesForType } = require('../src/app')

describe('getMovesForType', () => {
    describe('rook', () => {
        it('should not contain current location', () => {
            const moves = getMovesForType('r', {row: 7, column: 'a'})

            expect(moves).not.toContainEqual({row: 7, column: 'a'})
        })

        it('should include all rows', () => {
            const moves = getMovesForType('r', {row: 8, column: 'a'})

            expect(moves).toContainEqual({row: 1, column: 'a'})
            expect(moves).toContainEqual({row: 2, column: 'a'})
            expect(moves).toContainEqual({row: 3, column: 'a'})
            expect(moves).toContainEqual({row: 4, column: 'a'})
            expect(moves).toContainEqual({row: 5, column: 'a'})
            expect(moves).toContainEqual({row: 6, column: 'a'})
            expect(moves).toContainEqual({row: 7, column: 'a'})
        })

        it('should include all columns', () => {
            const moves = getMovesForType('r', {row: 8, column: 'a'})

            expect(moves).toContainEqual({row: 8, column: 'b'})
            expect(moves).toContainEqual({row: 8, column: 'c'})
            expect(moves).toContainEqual({row: 8, column: 'd'})
            expect(moves).toContainEqual({row: 8, column: 'e'})
            expect(moves).toContainEqual({row: 8, column: 'f'})
            expect(moves).toContainEqual({row: 8, column: 'g'})
            expect(moves).toContainEqual({row: 8, column: 'h'})
            expect(moves).toContainEqual({row: 8, column: 'h'})
        })
    })

    describe('bishop', () => {
        it('should not contain current location', () => {
            const moves = getMovesForType('b', {row: 8, column: 'c'})

            expect(moves).not.toContainEqual({row: 8, column: 'c'})
        })

        it('should include moves', () => {
            const moves = getMovesForType('b', {row: 8, column: 'c'})

            expect(moves).toContainEqual({row: 6, column: 'a'})
            expect(moves).toContainEqual({row: 7, column: 'b'})
            expect(moves).toContainEqual({row: 7, column: 'd'})
            expect(moves).toContainEqual({row: 6, column: 'e'})
            expect(moves).toContainEqual({row: 5, column: 'f'})
            expect(moves).toContainEqual({row: 4, column: 'g'})
            expect(moves).toContainEqual({row: 3, column: 'h'})
        })
    })
})