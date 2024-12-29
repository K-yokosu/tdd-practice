export abstract class Money {
    protected amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }
    equals(obj: Money) {
        return this.amount === obj.amount && this.constructor.name === obj.constructor.name;
    }
    getAmount(): number {
        return this.amount;
    }
    times(multiplier: number) {
        return this.amount * multiplier;
    }
    static dollar(amount: number) {
        return new Dollar(amount);
    }
    static franc(amount: number) {
        return new Franc(amount);
    }
}

export class Dollar extends Money {
    constructor(amount: number) {
        super(amount);
    }
}

export class Franc extends Money {
    constructor(amount: number) {
        super(amount);
    }
}