export class Dollar {
    private amount: number;
    constructor(amount: number) {
        this.amount = amount;
    }
    times(multiplier: number) {
        return this.amount * multiplier;
    }
    equals(obj: Dollar) {
        return this.amount === obj.amount;
    }
    getAmount(): number {
        return this.amount;
    }
}