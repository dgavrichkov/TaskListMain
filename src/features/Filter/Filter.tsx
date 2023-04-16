import { Button, Panel } from "../../shared/ui";
import { FC } from 'react';
import { Styled } from './styled';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { Tag } from '../../shared/ui/Tag';
import { clearFilterForNotes, clearFilterForTasks, selectCategoryForNotes, selectCategoryForTasks } from '../../entities';
import { TCategoryExtended } from '../../entities/categories/model/categories.interface';

type TFilterProps = {
  forPage: 'notes' | 'tasks';
};

export const Filter: FC<TFilterProps> = ({forPage}) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categories);
  const selectedNotesCtgs = useAppSelector((state) => state.filter.notes);
  const selectedTasksCtgs = useAppSelector((state) => state.filter.tasks);

  const tasksTags: TCategoryExtended[] = categories.map((ctg) => {
    if(selectedTasksCtgs.includes(ctg.id)) {
      return {...ctg, selected: true}
    }
    return {...ctg, selected: false}
  });
  const notesTags: TCategoryExtended[] = categories.map((ctg) => {
    if (selectedNotesCtgs.includes(ctg.id)) {
      return { ...ctg, selected: true };
    }
    return { ...ctg, selected: false };
  });

  const defineTags = (): TCategoryExtended[] | null => {
    switch (forPage) {
      case "notes":
        return notesTags;
      case "tasks":
        return tasksTags;
      default:
        return null;
    }
  };
  const tags = defineTags();

  const handleTagClick = (id: string) => {
    switch (forPage) {
      case "notes":
        dispatch(selectCategoryForNotes(id));
        break;
      case "tasks":
        dispatch(selectCategoryForTasks(id));
        break;
      default:
        return false;
    }
  }

  const handleClearFilter = () => {
    switch (forPage) {
      case "notes":
        dispatch(clearFilterForNotes());
        break;
      case "tasks":
        dispatch(clearFilterForTasks());
        break;
      default:
        return false;
    }
  }

  return (
    <Panel>
      <Styled.Wrap>
        <h4>Categories:</h4>
        <Styled.TagsList>
          {tags &&
            tags.map((ctg) => (
              <Tag
                key={ctg.id}
                onClick={() => handleTagClick(ctg.id)}
                isActive={ctg?.selected}
              >
                {ctg.title}
              </Tag>
            ))}
        </Styled.TagsList>
        <Button
          buttonType="button"
          className="item item--clear"
          onClick={handleClearFilter}
        >
          Clear filter
        </Button>
      </Styled.Wrap>
    </Panel>
  );
};
