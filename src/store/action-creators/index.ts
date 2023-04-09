import * as TasksActionCreators from "./tasks";
import * as FilterActionCreators from "./filter";

const actionCreators = {
  ...TasksActionCreators,
  ...FilterActionCreators,
}

export default actionCreators;
