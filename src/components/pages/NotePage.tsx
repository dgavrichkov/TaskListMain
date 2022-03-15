import { useNavigate, useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getNote as getNoteFromState } from "../../store/selectors/getNote";
import { Button } from "../Button";
import { StyledDetailPageWrap } from "../styled/StyledDetailPageWrap";

type ParamTypes = {
  noteId: string;
};

export const NotePage = () => {
  // ??? noteId type
  const { noteId } = useParams<ParamTypes>();
  const note = useTypedSelector((state) => getNoteFromState(state, noteId));
  const { delNoteAction } = useActions();
  const navigate = useNavigate();

  return (
    <>
      {typeof note === "object" && (
        <StyledDetailPageWrap>
          <h3>{note.name}</h3>
          <i>{note.category}</i>
          <p>{note.text}</p>
          <div className="btnGroup">
            <Button
              onClick={() => {
                delNoteAction(note.id);
                navigate("../notes", { replace: true });
              }}
            >
              Удалить
            </Button>
          </div>
        </StyledDetailPageWrap>
      )}
    </>
  );
};
