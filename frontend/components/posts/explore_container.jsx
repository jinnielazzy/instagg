import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/post_actions';
import Posts from './posts';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);