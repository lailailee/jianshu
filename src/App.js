import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import Header from './common/header';
import {GlobalStyle} from './style.js';
import {FontsizeGlobalStyle} from './statics/iconfont/iconfont';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store';

import Detail from './pages/detail/loadable.js';
import Home from './pages/home';
import Login from './pages/login';
import Write from './pages/write';

class App extends PureComponent {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <GlobalStyle />
            <FontsizeGlobalStyle />
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/detail/:id" exact component={Detail} />
            <Route path="/login" exact component={Login} />
            <Route path="/write" exact component={Write} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
