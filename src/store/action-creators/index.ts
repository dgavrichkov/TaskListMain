import * as TasksActionCreators from "./tasks";
import * as ThemeActionCreators from "./theme";
import * as FilterActionCreators from "./filter";

const actionCreators = {
  ...TasksActionCreators,
  ...ThemeActionCreators,
  ...FilterActionCreators,
}

export default actionCreators;
