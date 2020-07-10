import { observable, action } from "mobx";
import { APIService, APIServiceImpl } from "../../Services/APIService";

export default class AccountStore {
    @observable
    balance: number;

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
    }
}