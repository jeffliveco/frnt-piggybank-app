import React, { ReactElement } from 'react';
import { Provider } from 'mobx-react';
import './App.css';

import ManagerStore from './Store/ManagerStore';
import CoinSelector from './UI/Component/CoinSelector';
import TotalBalance from './UI/Component/TotalBalance';
import CoinDetail from './UI/Component/CoinDetail';

function App():ReactElement {
  return (
    <Provider store={new ManagerStore()}>
      <div className="App">
        <header className="App-header">
          <p>
            Piggy Bank
          </p>
        </header>
        <section className="App-content">
          <CoinSelector />
          <div className="App-detail">
            <CoinDetail />
            <TotalBalance />
          </div>
        </section>
      </div>
    </Provider>
  );
}

export default App;
