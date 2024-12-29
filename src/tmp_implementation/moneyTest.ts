export abstract class Money {
    protected amount: number;
    protected currency_kind: string = "";

    constructor(amount: number, currency_kind: string) {
        this.amount = amount;
        this.currency_kind = currency_kind;
    }

    currency(): string {
        return this.currency_kind;
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
        return new Dollar(amount, "USD");
    }
    static franc(amount: number) {
        return new Franc(amount, "CHF");
    }
}

export class Dollar extends Money {
    constructor(amount: number, currency_kind: string) {
        super(amount, currency_kind);
    }
}

export class Franc extends Money {
    constructor(amount: number, currency_kind: string) {
        super(amount, currency_kind);
    }
}