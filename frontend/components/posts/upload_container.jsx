import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_action';

import Upload from './upload';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.entities.users[state.session.id]
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    createPost: post => dispatch(createPost(post)),
    fetchUser: id => dispatch(fetchUser(id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Upload);