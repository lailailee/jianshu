import React, { PureComponent } from 'react'
// import {connect} from 'react-redux';
import {WritterWrapper, WritterItem} from '../style';
class Writter extends PureComponent{
    render(){
        return (
            <WritterWrapper>
                <WritterItem></WritterItem>
            </WritterWrapper>
        )
    }
}
export default Writter