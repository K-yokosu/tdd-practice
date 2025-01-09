import { Money, Bank, Expression, Sum } from "../../src/tmp_implementation/moneyTest";

describe("MeneyTest", () => {
    it("testMultiplication", () => {
        const five = Money.dollar(5);
        expect(Money.dollar(10).getAmount()).toEqual(five.times(2).getAmount());
        expect(Money.dollar(15).getAmount()).toEqual(five.times(3).getAmount());
    });
    it("testEquality", () => {
        const five = Money.dollar(5);
        expect(five.equals(Money.dollar(5))).toBeTruthy();
        expect(five.equals(Money.dollar(6))).not.toBeTruthy();
        expect(five.equals(Money.franc(5))).not.toBeTruthy();
    });
    it("testCurrency", () => {
        expect("USD").toEqual(Money.dollar(1).currency());
        expect("CHF").toEqual(Money.franc(1).currency());
    });
    it("testSimpleAddition", () => {
        const five: Money = Money.dollar(5);
        const sum: Expression = five.plus(five);
        const bank: Bank = new Bank();
        const reduced: Money = bank.reduce(sum, "USD");
        expect(Money.dollar(10)).toEqual(reduced);
    });
    it("testPlusReturnsSum", () => {
        const five: Money = Money.dollar(5);
        const result: Expression = five.plus(five);
        const sum: Sum = result as Sum;
        expect(five).toEqual(sum.augend);
        expect(five).toEqual(sum.addend);
    });
    it("testReduceSum", () => {
        const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
        const bank: Bank = new Bank();
        const result: Money = bank.reduce(sum, "USD");
        expect(Money.dollar(7)).toEqual(result);
    });
    it("testReduceMoney", () => {
        const bank: Bank = new Bank();
        const result: Money = bank.reduce(Money.dollar(1), "USD");
        expect(Money.dollar(1)).toEqual(result);
    });
});