import { Note } from '../Note/Note';
import { useAppSelector } from '../../app/store';
import { FC } from 'react';

type TListProps = {
  pageClass?: string;
};

export const NotesList: FC<TListProps> = ({ pageClass }) => {
  const notes = useAppSelector((state) =>
    state.notes.idList.map((id: string) => state.notes.data[id]),
  );
  const filter = useAppSelector((state) => state.filter.notes);
  const filteredNotes =
    filter.length > 0 ? notes.filter((note) => filter.includes(note.categoryID)) : notes;

  return (
    <div className={pageClass}>
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
    </div>
  );
};
