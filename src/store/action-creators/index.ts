import * as TasksActionCreators from "./tasks";
import * as FilterActionCreators from "./filter";
import * as NotesActionCreators from "./notes";

const actionCreators = {
  ...TasksActionCreators,
  ...FilterActionCreators,
  ...NotesActionCreators,
}

export default actionCreators;
