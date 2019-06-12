import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';
import { fetchSearchUsers, clearSearchUsers } from '../../actions/user_action';

const mapStateToProps = (state, ownProps) => {
  return {
    searchUsers: Object.values(state.entities.searchUsers),
    user: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchSearchUsers: (query) => dispatch(fetchSearchUsers(query)),
    clearSearchUsers: () => dispatch(clearSearchUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);