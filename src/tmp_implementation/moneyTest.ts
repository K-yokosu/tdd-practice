export class Money {
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
        return this.amount === obj.amount && this.currency_kind === obj.currency_kind;
    }
    getAmount(): number {
        return this.amount;
    }
    times(multiplier: number) {
        return new Money(this.amount * multiplier, this.currency_kind);
    }
    static dollar(amount: number) {
        return new Money(amount, "USD");
    }
    static franc(amount: number) {
        return new Money(amount, "CHF");
    }
}

export class Franc extends Money {
    constructor(amount: number, currency_kind: string) {
        super(amount, currency_kind);
    }
}