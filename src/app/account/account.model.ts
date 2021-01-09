export class Account {

    constructor(
        public id ?:number,
        public accountantName?: string,
        public accountNumber?:string,
        public accountType?: string,
        public balance?: number) { }
}