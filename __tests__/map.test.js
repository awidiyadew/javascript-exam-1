import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("array map test", () => {
    describe('#halfNumbers', () => {
        test('should return [2, 4] when numbers is [4, 8]', () => {
            const numbers = [4, 8];
            const expectedResult = [2, 4];

            const actualResult = halfNumbers(numbers);

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('#spliceNames', () => {
        test('should return [hello john] when names is [john]', () => {
            const names = ['john'];
            const expectedResult = ['Hello john'];

            const actualResult = spliceNames(names);

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('#addSerialNumber', () => {
        test('should return [1. orange, 2. apple] when fruits is [orange, apple]', () => {
            const fruits = ['orange', 'apple'];
            const expectedResult = ['1. orange', '2. apple'];

            const actualResult = addSerialNumber(fruits);

            expect(actualResult).toEqual(expectedResult);
        });
    });
});
