declare class StoreCustomer {
    private firstName;
    private lastName;
    constructor(firstName: string, lastName: string);
    visits: number;
    private ourName;
    showName(): void;
    set name(val: string);
    get name(): string;
}
