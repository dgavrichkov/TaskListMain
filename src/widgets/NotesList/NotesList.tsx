import styled from "styled-components";
import { DEFAULT_FILTER } from "../../constants/defaultFilterValue";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getNotes as getNotesFromState } from "../../store/selectors/getNotes";
import { Note as TypeNote } from "../../types/Note";
import { Note } from "../Note/Note";

type ListProps = {
  pageClass?: string;
};

export const NotesList = ({ pageClass }: ListProps) => {
  const notes = useTypedSelector(getNotesFromState);
  const filter = useTypedSelector((state) => state.notesFilter);

  const filterNotes = (tag: string) => {
    if (tag !== DEFAULT_FILTER) {
      return [...notes].filter((note) => note.category === tag);
    } else {
      return notes;
    }
  };

  return (
    <StyledNotes className={pageClass}>
      <div className="list">
        {notes &&
          filterNotes(filter).map((note: TypeNote) => (
            <Note
              key={note.id}
              id={note.id}
              name={note.name}
              text={note.text}
              category={note.category}
            />
          ))}
      </div>
    </StyledNotes>
  );
};

const StyledNotes = styled.div`
  .title {
    margin-bottom: 28px;
  }

  .list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;
