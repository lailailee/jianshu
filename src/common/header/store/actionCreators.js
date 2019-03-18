import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const actionCreators = () => ({
    type: constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const mouseInter = ()=>({
    type: constants.MOUNCE_INTER
})

export const mouseLeave=()=>({
    type: constants.MOUNCE_LEAVE
})
export const changePage=(page)=>({
    type: constants.CHANGE_PAGE,
    page
})
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            const data = res.data
            dispatch(changeList(data.data))
        }).catch(err => {
            console.log(err)
        })
    }
}
