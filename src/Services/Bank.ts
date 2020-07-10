import CashRequest from "../Model/CashRequest";

export interface IBank {
    addCash(request: CashRequest): Promise<string>;
    getTotalCash(): Promise<number>;
    getTotalCashByCoin(coin: string): Promise<number>;
}

export class Bank implements IBank {

    addCash(request: CashRequest): Promise<string> {
        throw new Error("Method not implemented.");
    }
    getTotalCash(): Promise<number> {
        throw new Error("Method not implemented.");
    }
    getTotalCashByCoin(coin: string): Promise<number> {
        throw new Error("Method not implemented.");
    }

}