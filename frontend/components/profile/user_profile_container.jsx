import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_action';
import { createFollow, deleteFollow } from '../../actions/follow_action';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.id];
  const posts = user ? Object.values(state.entities.posts) : [];
  const follows = Object.values(state.entities.follows);
  return ({
    user: user,
    currentUser: state.entities.users[state.session.id],
    posts: posts,
    follows: follows
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchUser: id => dispatch(fetchUser(id)),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: id => dispatch(deleteFollow(id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);