import CashRequest from "../Model/CashRequest";
import * as Http from '../Util/Http';

export interface IBank {
    addCash(request: CashRequest): Promise<string>;
    getTotalCash(): Promise<number>;
    getTotalCashByCoin(coin: string): Promise<number>;
}

export class Bank implements IBank {

    private url: string = 'http://localhost:8080/piggy-bank';
    private nameService: string = '/bank'

    async addCash(request: CashRequest): Promise<string> {
        const nameMethod: string = '/add-cash';
        const urlFinal: string = this.url.concat(this.nameService, nameMethod);
        const response = await Http.post<CashRequest, string>(urlFinal, request);
        return Promise.resolve(response.data);
    }

    async getTotalCash(): Promise<number> {
        const nameMethod: string = '/account';
        const urlFinal: string = this.url.concat(this.nameService, nameMethod);
        const response = await Http.get<number>(urlFinal, {});
        return Promise.resolve(response.data);
    }

    async getTotalCashByCoin(coin: string): Promise<number> {
        const nameMethod: string = `/account/${coin}`;
        const urlFinal: string = this.url.concat(this.nameService, nameMethod);
        const response = await Http.get<number>(urlFinal, {});
        return Promise.resolve(response.data);
    }
}