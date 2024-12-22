import { MoneyTest } from "../../src/tmp_implementation/moneyTest";

describe("MoneyTest", () => {
    it("testMultiplication", () => {
        const moneyTest = new MoneyTest();
        moneyTest.testMultiplication();
        expect(moneyTest.five.amount).toEqual(10);
    });
});