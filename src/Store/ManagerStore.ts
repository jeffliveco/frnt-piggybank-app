import ComponentStore from "./ComponentStore";
import AccountStore from "./Core/AccountStore";

export default class ManagerStore {
    account: AccountStore;
    component: ComponentStore;

    constructor(){
        this.account = new AccountStore();
        this.component = new ComponentStore(this.account);
    }
}