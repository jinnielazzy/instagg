import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_action';
import { createFollow, deleteFollow } from '../../actions/follow_action';
import { deletePost } from '../../actions/post_actions';
import Profile from './profile';

// following user profile
const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id];
  const posts = user ? Object.values(state.entities.posts) : [];
  const follows = Object.values(state.entities.follows);
  const allLikes = Object.values(state.entities.likes);
  const allComments = Object.values(state.entities.comments);

  return ({
    user: user,
    currentUser: state.entities.users[state.session.id],
    posts: posts,
    follows: follows,
    allComments: allComments,
    allLikes: allLikes
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchUser: id => dispatch(fetchUser(id)),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: id => dispatch(deleteFollow(id)),
    deletePost: id => dispatch(deletePost(id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);