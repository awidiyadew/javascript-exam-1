import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe("array find test", () => {
    describe('#firstGrownUp', () => {
        test('should return 18 when ages input is [15, 18, 17, 20]', () => {
            const ages = [15, 18, 17, 20];
            const expectedResult = 18;

            const actualResult = firstGrownUp(ages);

            expect(actualResult).toBe(expectedResult);
        });

        test('should return undefined when all ages below 18', () => {
            const ages = [15, 10, 12, 17];

            const actualResult = firstGrownUp(ages);

            expect(actualResult).toBeUndefined();
        });
    });

    describe('#firstOrange', () => {
        test('should return first orange when fruits is [apple, orange, mango, orange]', () => {
            const fruits = ['apple', 'orange', 'mango', 'orange'];
            const expectedResult = 'orange';

            const actualResult = firstOrange(fruits);

            expect(actualResult).toBe(expectedResult);
        });

        test('should return undefined when fruits has no orange', () => {
            const fruits = ['apple', 'mango'];

            const actualResult = firstOrange(fruits);

            expect(actualResult).toBeUndefined();
        });
    });

    describe('#firstLengthOver5Name', () => {
        test('should return name billie when names is [john, billie, doe]', () => {
            const names = ['john', 'billie', 'doe'];
            const expectedResult = 'billie';

            const actualResult = firstLengthOver5Name(names);

            expect(actualResult).toBe(expectedResult);
        });

        test('should return undefined when name\'s length in names no longer than 5', () => {
            const names = ['ali', 'jake'];

            const actualResult = firstLengthOver5Name(names);

            expect(actualResult).toBeUndefined();
        });
    });
});
