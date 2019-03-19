import React, {Component} from 'react';
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from './style.js';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writter from './components/Writter';
import {connect} from 'react-redux';
import {actionCreators} from './store';
class Home extends Component {
  handleScrollTop () {
    window.scrollTo (0, 0);
  }
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4620/c56b295694e97397f9845c532122994cdca622a7.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="banner"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writter> </Writter>
        </HomeRight>
        {this.props.showScroll
          ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
          : null}

      </HomeWrapper>
    );
  }
  componentDidMount () {
    this.props.changeHomeData ();
    this.bindEvents ();
  }
  bindEvents () {
    window.addEventListener ('scroll', this.props.changeScrollTopShow);
  }
  componentWilUnmoont () {
    window.removeEventListener ('scroll', this.props.changeScrollTopShow);
  }
}
const MapState = state => ({
  showScroll: state.getIn (['home', 'showScroll']),
});
const mapDispatch = dispatch => ({
  changeHomeData () {
    const action = actionCreators.getHomeInfo ();
    dispatch (action);
  },
  changeScrollTopShow (e) {
    if (document.documentElement.scrollTop > 300) {
      dispatch (actionCreators.toggleTopShow (true));
    } else {
      dispatch (actionCreators.toggleTopShow (false));
    }
  },
});
export default connect (MapState, mapDispatch) (Home);
