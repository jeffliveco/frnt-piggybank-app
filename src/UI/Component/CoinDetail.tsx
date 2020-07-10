import { observer, inject } from "mobx-react";
import React, { ReactElement, useState, useEffect } from "react";
import ManagerStore from "../../Store/ManagerStore";
import Coin from "../../Model/Coin";
import AccountStore from "../../Store/Core/AccountStore";

type CoinDetailProps = {
    store?: ManagerStore;
  };

const CoinDetail = inject('store')(observer((props: CoinDetailProps): ReactElement => {
    const { store } = props;

    if(!store) return <></>;

    const [account] = useState<AccountStore>(() => {
        return store.account;
    });

    if(!account) return <></>;

    useEffect(() => {
        account.updateBalace();
    }, [account]);

    return (
        <div>
            {account.coins.map((coin: Coin, index: number) => {
                return (
                    <div>
                        COIN {coin.name}
                        <span>({coin.totalCoin?coin.totalCoin:0})</span>
                        <span>${coin.totalCash?coin.totalCash:0}</span>
                    </div>
                );
            })}
        </div>
    );
}));

export default CoinDetail;