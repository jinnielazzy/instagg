import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchPosts } from '../../actions/post_actions';
import PostIndex from './post_index';
import { fetchAllUsers } from '../../actions/user_action';
import { deleteLike, createLike, fetchLikes } from '../../actions/like_action';
import { createComment, deleteComment } from '../../actions/comment_action';

// might re-consider the state 
const mapStateToProps = (state, ownProps) => {
  return {
    posts: Object.values(state.entities.posts),
    users: Object.values(state.entities.users),
    likes: Object.values(state.entities.likes),
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchLikes: (id) => dispatch(fetchLikes(id)),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (id) => dispatch(deleteLike(id)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (comment) => dispatch(deleteComment(comment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);