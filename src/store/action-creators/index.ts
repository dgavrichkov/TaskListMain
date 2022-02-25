import * as TasksActionCreators from "./tasks";
import * as ThemeActionCreators from "./theme";

const actionCreators = {
  ...TasksActionCreators,
  ...ThemeActionCreators
}

export default actionCreators;
