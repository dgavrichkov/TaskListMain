import { Button, Panel } from '../../shared/ui';
import { FC } from 'react';
import { Styled } from './styled';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { Tag } from '../../shared/ui/Tag';
import { TFilterablePages, clearFilter, selectCategory } from '../../entities';
import { TCategoryExtended } from '../../entities/categories/model/categories.interface';

type TFilterProps = {
  forPage: TFilterablePages;
};

export const Filter: FC<TFilterProps> = ({ forPage }) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categories);
  const selectedNotesCtgs = useAppSelector((state) => state.filter.notes);
  const selectedTasksCtgs = useAppSelector((state) => state.filter.tasks);

  const tasksTags: TCategoryExtended[] = categories.map((ctg) => {
    if (selectedTasksCtgs.includes(ctg.id)) {
      return { ...ctg, selected: true };
    }
    return { ...ctg, selected: false };
  });
  const notesTags: TCategoryExtended[] = categories.map((ctg) => {
    if (selectedNotesCtgs.includes(ctg.id)) {
      return { ...ctg, selected: true };
    }
    return { ...ctg, selected: false };
  });

  const defineTags = (): TCategoryExtended[] | null => {
    switch (forPage) {
      case 'notes':
        return notesTags;
      case 'tasks':
        return tasksTags;
      default:
        return null;
    }
  };
  const tags = defineTags();

  const handleTagClick = (id: string) => {
    dispatch(selectCategory({ id, entityType: forPage }));
  };

  const handleClearFilter = () => {
    dispatch(clearFilter(forPage));
  };

  return (
    <Panel>
      <Styled.Wrap>
        <h4>Categories:</h4>
        <Styled.TagsList>
          {tags &&
            tags.map((ctg) => (
              <Tag isActive={ctg?.selected} key={ctg.id} onClick={() => handleTagClick(ctg.id)}>
                {ctg.title}
              </Tag>
            ))}
        </Styled.TagsList>
        <Button className="item item--clear" type="button" onClick={handleClearFilter}>
          Clear filter
        </Button>
      </Styled.Wrap>
    </Panel>
  );
};
