import styled from 'styled-components'
import LogoPic from '../../statics/logo.png'

export const HeaderOutside = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`
export const HeaderWrapper = styled.div`
  margin: 0 auto;
  width: 1440px;
  position: relative;
  height: 58px;
`

export const Logo = styled.a.attrs({
  href: './'
})`
  height: 58px;
  width: 100px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${LogoPic});
  background-size: contain;
`

export const Nav = styled.div`
  height: 100%;
  width: 960px;
  margin: 0 auto;
`
export const NavItem = styled.div`
  font-size: 17px;
  line-height: 56px;
  padding: 0 15px;
  color: #333333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
    .iconfont {
      font-size: 20px;
    }
  }
  &.active {
    color: #1a6f5a;
  }
`
export const SearchWrapper = styled.div`
  position: relative;
  float: left;

  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #999;
      color: #ffffff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    width: 160px;
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }

  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`
export const SearchInfo = styled.div`
background:#fff;
  position: absolute;
  width:240px;
  padding: 0 20px; 
  left: 0;
  top: 56px;
  box-shadow:0 0 8px rgba(0,0,0,.2)
`
export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;

`
export const SearchInfoSwitch = styled.span`
float: right;
user-select: none;
font-size:13px;
cursor:pointer;

.spin{
  display:block;
  float:left;
  font-size:12px;
  margin-right:8px;
  transition:all .2s ease-in;
  /* transform:rotate(0deg) */
  transform-origin:center center;
}
`
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  font-size:12px;
  padding:0 5px;
  line-height:20px;
  border:1px solid #ddd;
  color:#787878;
  margin-right:10px;
  margin-bottom:15px;
  border-radius:3px;
`
export const SearchInfoList = styled.div`
  overflow:hidden;
`
export const Addition = styled.div`
  position: absolute;
  height: 56px;
  right: 0;
  top: 0;
`

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border: 1px solid #ec6149;
  padding: 0 20px;
  margin-right: 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #ffffff;
    background: #ec6149;
    .iconfont {
      margin-right: 5px;
      font-size: 18px;
    }
  }
`
