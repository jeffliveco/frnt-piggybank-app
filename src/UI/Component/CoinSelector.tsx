import { observer, inject } from "mobx-react";
import React, { ReactElement, useState, useCallback } from "react";
import ManagerStore from "../../Store/ManagerStore";
import CoinSelectorView from "../../Store/Component/CoinSelectorView";
import Coin from "../../Model/Coin";

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
        <div>
            {viewModel.coins.map((coin: Coin, index: number) => {
                return (
                    <button key={`button-${index}`} onClick={() => onHandleClick(coin.value)}>
                        COIN {coin.name}
                    </button>
                );
            })}
        </div>
    );
}));

export default CoinSelector;