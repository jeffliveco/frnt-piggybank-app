import { observer, inject } from "mobx-react";
import React, { ReactElement, useState, useEffect } from "react";
import ManagerStore from "../../../Store/ManagerStore";
import Coin from "../../../Model/Coin";
import AccountStore from "../../../Store/Core/AccountStore";
import './CoinDetail.css';

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
        <div className="CoinDetail">
            {account.coins.map((coin: Coin, index: number) => {
                return (
                    <div className="CoinDetail_Box">
                        <span className="CoinDetail_Box_Name">COIN {coin.name}</span>
                        <span className="CoinDetail_Box_Count">Coin's ({coin.totalCoin?coin.totalCoin:0})</span>
                        <span className="CoinDetail_Box_Count">$ {coin.totalCash?coin.totalCash:0}</span>
                    </div>
                );
            })}
        </div>
    );
}));

export default CoinDetail;