
import { observable } from 'mobx';
import Coin from '../../Model/Coin';
import AccountStore from '../Core/AccountStore';
import { APIService, APIServiceImpl } from '../../Services/APIService';
import CashRequest from '../../Model/CashRequest';

export default class CoinSelectorView {
    @observable
    coins: Coin[] = [
        { name: '50', value: 50 },
        { name: '100', value: 100 },
        { name: '200', value: 200 },
        { name: '500', value: 500 },
        { name: '1000', value: 1000 },
    ];

    private account: AccountStore;
    private api: APIService;

    constructor(account: AccountStore) {
        this.account = account;
        this.api = APIServiceImpl.getInstance();
    }

    addCash(value: number): void {
        const cashReq: CashRequest = new CashRequest();
        cashReq.value = value;
        this.api.addCash(cashReq).then((response: string) => {
            this.account.updateBalace();
        }).catch((error: Error) => {
            console.error("Error Add cash", error);
        });
    }
}