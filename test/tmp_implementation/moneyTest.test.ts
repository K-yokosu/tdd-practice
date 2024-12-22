import { Dollar } from "../../src/tmp_implementation/moneyTest";

describe("MoneyTest", () => {
    it("testMultiplication", () => {
        const five = new Dollar(5);
        five.times(2);
        expect(five.amount).toEqual(10);
    });
});