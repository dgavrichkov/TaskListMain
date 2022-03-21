import * as TasksActionCreators from "./tasks";
import * as ThemeActionCreators from "./theme";
import * as FilterActionCreators from "./filter";
import * as NotesActionCreators from "./notes";

const actionCreators = {
  ...TasksActionCreators,
  ...ThemeActionCreators,
  ...FilterActionCreators,
  ...NotesActionCreators,
}

export default actionCreators;
