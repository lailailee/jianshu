import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store';

import {Link} from 'react-router-dom';

import {
  HeaderOutside,
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from './style';
// UI组件

class Header extends PureComponent {
  render () {
    const {
      focused,
      handleInputFocus,
      handleInputBlur,
      list,
      login,
      loginOut,
    } = this.props;
    return (
      <HeaderOutside>
        <HeaderWrapper>
          <Link to="/"><Logo /></Link>
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载App</NavItem>
            {login
              ? <NavItem onClick={loginOut} className="right">退出</NavItem>
              : <Link to="/login">
                  <NavItem className="right">登陆</NavItem>
                </Link>}

            <NavItem className="right">
              <span className="iconfont">&#xe607;</span>
            </NavItem>
            <SearchWrapper>
              <CSSTransition in={focused} timeout={200} classNames="slide">
                <NavSearch
                  className={focused ? 'focused' : ''}
                  onFocus={() => handleInputFocus (list)}
                  onBlur={handleInputBlur}
                />
              </CSSTransition>
              <span
                className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
              >
                &#xe678;
              </span>
              {this.getListArea (focused)}
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to="/write">
              <Button className="writting">
                <span className="iconfont zoom">&#xe616;</span>写文章
              </Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </HeaderOutside>
    );
  }
  getListArea () {
    const {
      focused,
      list,
      page,
      mouseIn,
      totalPage,
      handleMouseInter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;
    const newList = list.toJS ();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        if (newList[i] !== undefined) {
          pageList.push (
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          );
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseInter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                handleChangePage (page, totalPage, this.spinIcon);
              }}
            >
              <span
                ref={icon => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe6e7;
              </span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }
}
const mapStateToProps = state => {
  return {
    focused: state.getIn (['header', 'focused']),
    list: state.getIn (['header', 'list']),
    page: state.getIn (['header', 'page']),
    mouseIn: state.getIn (['header', 'mouseIn']),
    totalPage: state.getIn (['header', 'totalPage']),
    login: state.getIn (['login', 'login']),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus (list) {
      list.size === 0 && dispatch (actionCreators.getList ());
      dispatch (actionCreators.actionCreators ());
    },
    handleInputBlur () {
      dispatch (actionCreators.searchBlur ());
    },
    handleMouseInter () {
      dispatch (actionCreators.mouseInter ());
    },
    handleMouseLeave () {
      dispatch (actionCreators.mouseLeave ());
    },
    handleChangePage (page, totalPage, spin) {
      let originAngle = spin.style.transform.replace (/[^0-9]/g, '');
      if (originAngle) {
        originAngle = parseInt (originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page < totalPage) {
        dispatch (actionCreators.changePage (page + 1));
      } else {
        dispatch (actionCreators.changePage (1));
      }
    },
    loginOut () {
      dispatch (loginActionCreators.loginOut ());
    },
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (Header);
