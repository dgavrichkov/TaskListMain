import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../shared/ui';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { TNote } from '../../entities/note/model/note.interface';
import { deleteNote, selectCategoryById } from '../../entities';

export const Note = ({ id, name, text, categoryID }: TNote) => {
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategoryById(categoryID));

  const handleClick = () => {
    dispatch(deleteNote(id));
  };

  return (
    <Article>
      <h3 className="name">{name}</h3>
      <p className="text">{text}</p>
      <i className="category">{category?.title}</i>
      <NavLink to={id}>Открыть</NavLink>
      <Button className="delete" onClick={handleClick}>
        Удалить
      </Button>
    </Article>
  );
};

const Article = styled.article`
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.shadows.button};
  padding: 14px;
  display: grid;
  gap: 14px;
  column-gap: 14px;
  border: 1px solid transparent;
  .delete {
    margin-top: 14px;
  }
`;
