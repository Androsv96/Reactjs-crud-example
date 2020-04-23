import { fetchGetAllUsers, fecthAddUser } from "../../Redux/Actions/";
import { bindActionCreators } from "redux";
import View from "./view";
import { connect } from "react-redux";

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchGetAllUsers, fecthAddUser }, dispatch);

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(View);

export default UsersContainer;
