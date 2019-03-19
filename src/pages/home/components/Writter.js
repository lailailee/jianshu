import React, { Component } from 'react'
import {connect} from 'react-redux';
import {WritterWrapper, WritterItem} from '../style';
class Writter extends Component{
    render(){
        return (
            <WritterWrapper>
                <WritterItem></WritterItem>
            </WritterWrapper>
        )
    }
}
export default Writter