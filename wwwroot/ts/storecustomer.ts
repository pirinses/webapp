class StoreCustomer {
    //constructor
    constructor(private firstName: string, private lastName: string) {

    }

    public visits: number = 0;
    private ourName: string;


    //METHOD
    public showName() {
        alert(this.firstName + " " + this.lastName);
    }

    //ACCESSORS
    //must have a param
    set name(val) {
        this.ourName = val;
    }

    get name() {
        return this.ourName;
    }
}


//let cust = new StoreCustomer();
//cust.visits = 10;