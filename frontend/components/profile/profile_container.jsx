import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/user_action';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  const currentUser = state.entities.users[state.session.id];
  const posts = Object.values(state.entities.posts);
  return ({
    currentUser: currentUser,
    user: currentUser,
    posts: posts
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);