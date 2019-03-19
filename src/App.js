import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Header from './common/header'
import { GlobalStyle } from './style.js'
import { FontsizeGlobalStyle } from './statics/iconfont/iconfont'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'


import Detail from './pages/detail'
import Home from './pages/home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <GlobalStyle />
          <FontsizeGlobalStyle />
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App
