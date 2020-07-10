import { observer, inject } from "mobx-react";
import React, { ReactElement, useState, useEffect } from "react";
import ManagerStore from "../../Store/ManagerStore";
import AccountStore from "../../Store/Core/AccountStore";

type TotalBalanceProps = {
    store?: ManagerStore;
  };

const TotalBalance = inject('store')(observer((props: TotalBalanceProps): ReactElement => {
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
            TOTAL ${account.balance}
        </div>
    );
}));

export default TotalBalance;