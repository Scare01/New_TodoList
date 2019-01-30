import { connect } from "react-redux";
import { setVisibilityFilter } from "../redux/actions/index";
import Button from "./button";

let mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

let mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
