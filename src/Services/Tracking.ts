import * as Http from '../Util/Http';

export interface ITracking {
    getTotalCoins(): Promise<number>;
    getTotalCoinsByCoin(coin: string): Promise<number>;
}

export class Tracking implements ITracking {
    private url: string = 'http://localhost:8080/piggy-bank';
    private nameService: string = '/tracking'

    async getTotalCoins(): Promise<number> {
        const nameMethod: string = '/coin';
        const urlFinal: string = this.url.concat(this.nameService, nameMethod);
        const response = await Http.get<number>(urlFinal, {});
        return Promise.resolve(response.data);
    }

    async getTotalCoinsByCoin(coin: string): Promise<number> {
        const nameMethod: string = `/coin/${coin}`;
        const urlFinal: string = this.url.concat(this.nameService, nameMethod);
        const response = await Http.get<number>(urlFinal, {});
        return Promise.resolve(response.data);
    }

}