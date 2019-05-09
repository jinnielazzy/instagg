import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import PostIndex from './post_index';
import { fetchAllUsers } from '../../actions/user_action';
import { deleteLike, createLike } from '../../actions/like_action';
import { createComment, deleteComment } from '../../actions/comment_action';

// might re-consider the state 
const mapStateToProps = (state, ownProps) => {
  debugger
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
    fetchPosts: () => dispatch(fetchPosts()),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (like) => dispatch(deleteLike(like)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (comment) => dispatch(deleteComment(comment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);