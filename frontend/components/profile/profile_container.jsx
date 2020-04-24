import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/user_action';
import { deletePost } from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';

// current user profile
const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const posts = Object.values(state.entities.posts);
  const allLikes = Object.values(state.entities.likes);
  const allComments = Object.values(state.entities.comments);

  return ({
    currentUser: currentUser,
    user: currentUser,
    posts: posts,
    allLikes: allLikes,
    allComments: allComments
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id)),
    deletePost: id => dispatch(deletePost(id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);