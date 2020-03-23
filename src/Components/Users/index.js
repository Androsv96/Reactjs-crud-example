import { fetchGetAllUsers } from "../../Redux/Actions/";
import { bindActionCreators } from "redux";
import View from "./view";
import { connect } from "react-redux";

const mapStateToProps = state => ({ state: state });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchGetAllUsers }, dispatch);

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(View);

export default UsersContainer;
