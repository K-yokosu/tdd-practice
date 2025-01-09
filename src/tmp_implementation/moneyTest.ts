export interface Expression {
    reduce(bank: Bank, to: string): Money;
}

export class Money implements Expression {
    protected amount: number;
    protected currency_kind: string = "";

    constructor(amount: number, currency_kind: string) {
        this.amount = amount;
        this.currency_kind = currency_kind;
    }

    public reduce(bank: Bank, to: string) {
        const rate: number = bank.rate(this.currency_kind, to);
        return new Money(this.amount / rate, to);
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
    plus(addend: Money): Expression {
        return new Sum(this, addend);
    }
    static dollar(amount: number) {
        return new Money(amount, "USD");
    }
    static franc(amount: number) {
        return new Money(amount, "CHF");
    }
}

export class Bank {
    private rates: Map<Pair, number> = new Map();
    reduce(source: Expression, to: string) {
        return source.reduce(this, to);
    }
    addRate(from: string, to: string, rate: number) {
        this.rates.set(new Pair(from, to), rate);
    }
    rate(from: string, to: string): number {
        if (from === to) return 1;
        return this.rates.get(new Pair(from, to)) ?? 1; // 応急処置
    }
}

export class Sum implements Expression {
    augend: Money;
    addend: Money;

    constructor(augend: Money, addend: Money) {
        this.augend = augend;
        this.addend = addend;
    }

    public reduce(bank: Bank, to: string) {
        const amount: number = this.augend.getAmount() + this.addend.getAmount();
        return new Money(amount, to);
    }

}

export class Pair {
    private from: string;
    private to: string;

    constructor(from: string, to: string) {
        this.from = from;
        this.to = to;
    }

    equals(obj: Pair): boolean {
        return this.from === obj.from && this.to === obj.to;
    }

    public hashCode(): number {
        return 0;
    }
}