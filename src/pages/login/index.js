import React, {PureComponent} from 'react';
import {LoginWrapper, LoginBox, Input, Button} from './style.js';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {Redirect} from 'react-router-dom';
class Login extends PureComponent {
  render () {
    const {Login, login} = this.props;
    if (!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="账号"
              ref={input => {
                this.account = input;
              }}
            />
            <Input
              placeholder="密码"
              type="password"
              ref={input => {
                this.password = input;
              }}
            />
            <Button onClick={() => Login (this.account, this.password)}>
              登陆
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
  componentDidMount () {}
}
const mapState = state => ({
  login: state.getIn (['login', 'login']),
});
const mapDispatch = dispatch => ({
  Login (accountElem, passwordElem) {
    dispatch (actionCreators.login (accountElem.value, passwordElem.value));
  },
});
export default connect (mapState, mapDispatch) (Login);
