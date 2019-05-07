import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_action';
import { createFollow, deleteFollow } from '../../actions/follow_action';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
    // user: state.entities.users[ownProps.match.params[id]]
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchUser: id => dispatch(fetchUser(id)),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: id => dispatch(deleteFollow(id))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);