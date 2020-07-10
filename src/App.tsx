import React, { ReactElement } from 'react';
import { Provider } from 'mobx-react';
import './App.css';

import ManagerStore from './Store/ManagerStore';
import CoinSelector from './UI/Component/CoinSelector';

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
          <div>
            <div>
              <div>
                COIN 50
                <span>0</span>
                <span>$0</span>
              </div>
              <div>
                COIN 100
                <span>0</span>
                <span>$0</span>
              </div>
              <div>
                COIN 200
                <span>0</span>
                <span>$0</span>
              </div>
              <div>
                COIN 500
                <span>0</span>
                <span>$0</span>
              </div>
              <div>
                COIN 1000
                <span>0</span>
                <span>$0</span>
              </div>
            </div>
            <div>
              TOTAL $0
            </div>
          </div>
        </section>
      </div>
    </Provider>
  );
}

export default App;
