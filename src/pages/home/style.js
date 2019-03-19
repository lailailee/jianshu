import styled from 'styled-components';

export const HomeWrapper = styled.div `
    width:960px;
    margin :0 auto;
    overflow:hidden;
    /* 触发bfc */
`;

export const HomeLeft = styled.div `
   margin-left:15px;
   padding-top:30px;
   width:625px;
   float:left;
   .banner-img{
       width:625px;
       height:270px;
   }
`;
export const HomeRight = styled.div `
    width:280px;
    float:right;
`;

export const TopicWrapper = styled.div `
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled.div `
    cursor:pointer;
    margin-bottom:18px;
    margin-left:18px;
    float:left;
    height:32px;
   line-height:32px;
   font-size:14px;
   padding-right:10px;
   color:#000;
   border:1px solid #dcdcdc;
   border-radius:4px;
   background:#f7f7f7;
   .topic-pic{
       display: block;
       margin-right:10px;
       float:left;
       width:32px;
       height:32px;
   }
`;

export const ListItem = styled.div `
overflow:hidden;
padding:20px 0;
border-bottom:1px solid #dcdcdc;
.pic{
    width:125px;
    height:100px;
    float:right;
    display:block;
    border-radius:10px;
}
`;

export const ListInfo = styled.div `
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        font-size:13px;
        color:#999;
        line-height:18px
    }
`;
export const RecommendWrapper = styled.div `
    margin:30px 0;
    width:280px;
`;
export const RecommendItem = styled.div `
       cursor:pointer;
    margin-bottom:8px;
    width:280px;
    height:50px;
    background:url(${props => props.imgUrl});
    background-size:contain;
`;

export const WritterWrapper = styled.div `
    width:278px;
    border:1px solid #dcdcdc;
    border-radius:3px;
    height:300px;
    line-height:300px;
    text-align:center;
`;
export const WritterItem = styled.div `
    
`;
export const LoadMore = styled.div `
    cursor:pointer;
    width:100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    margin :30px 0;
`;


export const BackTop = styled.div `
    cursor:pointer;
    position:fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
`