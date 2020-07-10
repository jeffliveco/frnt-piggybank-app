import { observer, inject } from "mobx-react";
import React, { ReactElement, useState, useCallback } from "react";
import Coin from "../../../Model/Coin";
import ManagerStore from "../../../Store/ManagerStore";
import CoinSelectorView from "../../../Store/Component/CoinSelectorView";
import './CoinSelector.css'

type CoinSelectorProps = {
    store?: ManagerStore;
  };

const CoinSelector = inject('store')(observer((props: CoinSelectorProps): ReactElement => {
    const { store } = props;

    if(!store) return <></>;

    const [viewModel] = useState<CoinSelectorView>(() => {
        return store.component.coinSelectorView;
    });

    if(!viewModel) return <></>;

    const onHandleClick = useCallback((value: number) => {
        viewModel.addCash(value);
    }, [viewModel]);

    return (
        <div className="CoinSelector">
            <h4>Insert coin</h4>
            {viewModel.coins.map((coin: Coin, index: number) => {
                return (
                    <button className="CoinSelector_Button" key={`button-${index}`} onClick={() => onHandleClick(coin.value)}>
                        COIN {coin.name}
                    </button>
                );
            })}
        </div>
    );
}));

export default CoinSelector;