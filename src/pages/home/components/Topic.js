import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TopicWrapper, TopicItem} from '../style';

class Topic extends Component {
  render () {
    const list = this.props.list;
    return (
      <TopicWrapper>
        {list.map (item => (
          <TopicItem key={item.get ('id')}>
            <img className="topic-pic" src={item.get('imgUrl')} alt="321"/>
            {item.get ('title')}
          </TopicItem>
        ))}

      </TopicWrapper>
    );
  }
}
const mapState = state => ({
  list: state.getIn (['home', 'topicList']),
});

export default connect (mapState, null) (Topic);
