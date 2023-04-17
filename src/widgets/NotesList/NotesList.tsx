import styled from "styled-components";
import { Note } from "../Note/Note";
import { useAppSelector } from '../../app/store';

type ListProps = {
  pageClass?: string;
};

export const NotesList = ({ pageClass }: ListProps) => {
  const notes = useAppSelector((state) => state.notes.idList.map((id: string) => state.notes.data[id]));
  const filter = useAppSelector((state) => state.filter.notes);
  const filteredNotes =
    filter.length > 0
      ? notes.filter((note) => filter.includes(note.categoryID))
      : notes;

  return (
    <StyledNotes className={pageClass}>
      <div className="list">
        {filteredNotes.length > 0
          ? filteredNotes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              name={note.name}
              text={note.text}
              categoryID={note.categoryID}
            />
          ))
          : 'No notes'
        }
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
