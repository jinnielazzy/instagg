import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments } from '../../actions/comment_action';

const mapStateToProps = (state, ownProps) => {
  const comments = Object.values(state.entities.comments).filter(
    comment => comment.post_id === ownProps.post.id
    );

  return {
    post: ownProps.post,
    comments: comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: (id) => dispatch(fetchComments(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);