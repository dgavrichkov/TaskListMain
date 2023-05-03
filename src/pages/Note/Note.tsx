import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../shared/ui';
import { StyledDetailPageWrap } from '../../shared/layouts';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { deleteNote, selectCategoryById } from '../../entities';

type ParamTypes = {
  noteId: string;
};

export const Note: FC = () => {
  const dispatch = useAppDispatch();
  const { noteId } = useParams<ParamTypes>();
  // TODO: fix architecture for awoiding that dirt
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const note = useAppSelector((state) => state.notes.data[noteId!]);
  const navigate = useNavigate();
  const category = useAppSelector(selectCategoryById(note.categoryID));

  const handleDelete = () => {
    noteId && dispatch(deleteNote(noteId));
    navigate('../notes', { replace: true });
  };

  if (typeof note === 'boolean') {
    return null;
  }

  return (
    <StyledDetailPageWrap>
      <h3>{note.name}</h3>
      <i>{category?.title}</i>
      <p>{note.text}</p>
      <div className="btnGroup">
        <Button onClick={handleDelete}>Удалить</Button>
      </div>
    </StyledDetailPageWrap>
  );
};
