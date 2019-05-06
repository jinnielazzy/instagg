import { connect } from 'react-redux';
import NavBar from './navbar';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);