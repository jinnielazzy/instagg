import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments, deleteComment } from '../../actions/comment_action';

const mapStateToProps = (state, ownProps) => {
  const comments = Object.values(state.entities.comments).filter(
    comment => comment.post_id === ownProps.post.id
    );
  const currentUser = state.entities.users[state.session.id];
  return {
    post: ownProps.post,
    comments: comments,
    currentUser: currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: (id) => dispatch(fetchComments(id)),
    deleteComment: (id) => dispatch(deleteComment(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);