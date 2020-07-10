import CoinSelectorView from "./Component/CoinSelectorView";
import AccountStore from "./Core/AccountStore";

export default class ComponentStore {
    coinSelectorView: CoinSelectorView;

    constructor(account: AccountStore){
        this.coinSelectorView = new CoinSelectorView(account);
    }
}