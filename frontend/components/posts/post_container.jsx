import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import PostIndex from './post_index';

// might re-consider the state 
const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    posts: Object.values(state.entities.posts),
    users: Object.values(state.entities.users),
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);