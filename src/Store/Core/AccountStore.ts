import { observable, action } from "mobx";
import { APIService, APIServiceImpl } from "../../Services/APIService";
import Coin from "../../Model/Coin";

export default class AccountStore {
    @observable
    balance: number;

    @observable
    coins: Coin[] = [
        { name: '50', value: 50 },
        { name: '100', value: 100 },
        { name: '200', value: 200 },
        { name: '500', value: 500 },
        { name: '1000', value: 1000 }
    ];

    private api: APIService;

    constructor () {
        this.balance = 0;
        this.api = APIServiceImpl.getInstance();
    }

    @action.bound
    updateBalace(): void {
        this.api.getTotalCash().then((response: number) => 
            this.balance = response
        ).catch((error: Error) => {
            console.error("Error GetTotalCash", error);
        });

        this.coins.forEach((coin: Coin) => {
            this.updateCoinTotal(coin);
            this.updateCoinCash(coin);
        });
    }

    @action.bound
    private updateCoinTotal(coin: Coin): void {
        this.api.getTotalCoinsByCoin(coin.name).then((response: number) => {
            coin.totalCoin = response;
        }).catch((error: Error) => {
            console.error("Error GetTotalCoinsByCoin", error);
        });
    }

    @action.bound
    private updateCoinCash(coin: Coin): void {
        this.api.getTotalCashByCoin(coin.name).then((response: number) => {
            coin.totalCash = response;
        }).catch((error: Error) => {
            console.error("Error GetTotalCoinsByCoin", error);
        });
    }
}