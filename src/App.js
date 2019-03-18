import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Header from './common/header'
import { GlobalStyle } from './style.js'
import { FontsizeGlobalStyle } from './statics/iconfont/iconfont'
import store from './store'
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <FontsizeGlobalStyle />
        <Header />
      </Provider>
    )
  }
}

export default App
