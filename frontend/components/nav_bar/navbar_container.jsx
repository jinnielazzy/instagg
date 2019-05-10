import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';
import { fetchSearchUsers } from '../../actions/user_action';

const mapStateToProps = (state, ownProps) => {
  return {
    searchUsers: Object.values(state.entities.searchUsers),
    user: state.session.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchSearchUsers: (query) => dispatch(fetchSearchUsers(query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);