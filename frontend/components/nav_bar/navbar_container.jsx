import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';
import { fetchSearchUsers } from '../../actions/user_action';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    // searchUsers: Object.values(state.searchUsers)
    user: state.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchSearchUsers: (query) => dispatch(fetchSearchUsers(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);