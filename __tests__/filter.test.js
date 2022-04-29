import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('array filter test', () => {
    describe('#filterEvenNumbers', () => {
        test('should return array contain [2, 4] when numbers is number sequence 1 to 5', () => {
            const numbers = [1, 2, 3, 4, 5];
            const expectedResult = [2, 4];

            const actualResult = filterEvenNumbers(numbers);

            expect(actualResult).toEqual(expectedResult);
        });

        test('should return empty array when numbers is [7, 3, 11]', () => {
            const numbers = [7, 3, 11];
            const expectedResult = [];

            const actualResult = filterEvenNumbers(numbers);

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('#filterLengthWith4', () => {
        test('should return words [city, cars] when input words is [city, cycle, cars]', () => {
            const words = ['city', 'cycle', 'cars'];
            const expectedResult = ['city', 'cars'];

            const actualResult = filterLengthWith4(words);

            expect(actualResult).toEqual(expectedResult);
        });

        test('should return empty array when input words is [airplane]', () => {
            const words = ['airplane'];
            const expectedResult = [];

            const actualResult = filterLengthWith4(words);

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('#filterStartWithA', () => {
        test('should return letters [android] when input letters is [android, iOS]', () => {
            const letters = ['android', 'iOS'];
            const expectedResult = ['android'];

            const actualResult = filterStartWithA(letters);

            expect(actualResult).toEqual(expectedResult);
        });

        test('should return empty array when input letters is [iOS, google]', () => {
            const letters = ['iOS', 'google'];
            const expectedResult = [];

            const actualResult = filterStartWithA(letters);

            expect(actualResult).toEqual(expectedResult);
        });
    });
});
