import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import PostIndex from './post_index';
import { fetchAllUsers } from '../../actions/user_action';

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
  // debugger
  return {
    logout: () => dispatch(logout()),
    fetchPosts: () => dispatch(fetchPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);