import React, { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from 'app/store';
import { Note } from '../Note';

type ListProps = {
  pageClass?: string;
};

export const NotesList: FC<ListProps> = ({ pageClass }) => {
  const notes = useAppSelector((state) =>
    state.notes.idList.map((id: string) => state.notes.data[id]),
  );
  const filter = useAppSelector((state) => state.filter.notes);
  const filteredNotes =
    filter.length > 0 ? notes.filter((note) => filter.includes(note.categoryID)) : notes;

  return (
    <StyledNotes className={pageClass}>
      <div className="list">
        {filteredNotes.length > 0
          ? filteredNotes.map((note) => (
              <Note
                categoryID={note.categoryID}
                id={note.id}
                key={note.id}
                name={note.name}
                text={note.text}
              />
            ))
          : 'No notes'}
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
