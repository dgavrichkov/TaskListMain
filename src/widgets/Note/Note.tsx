import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../shared/ui';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { TNote } from '../../entities/note/model/note.interface';
import { deleteNote, selectCategoryById } from '../../entities';
import { Card, CardContent, CardHeader } from '@/shared/ui/Card';

export const Note: FC<TNote> = ({ id, name, text, categoryID }) => {
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategoryById(categoryID));

  const handleClick = () => {
    dispatch(deleteNote(id));
  };

  return (
    <Card>
      <CardHeader>
        <h3 className="name">{name}</h3>
      </CardHeader>
      <CardContent>
        <p className="text">{text}</p>
        <i className="category">{category?.title}</i>
        <NavLink to={id}>Открыть</NavLink>
        <Button className="delete" onClick={handleClick}>
          Удалить
        </Button>
      </CardContent>
    </Card>
  );
};
