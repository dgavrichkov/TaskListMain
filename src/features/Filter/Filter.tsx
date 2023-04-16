import { Button, Panel } from "../../shared/ui";
import { FC } from 'react';
import { Styled } from './styled';
import { useAppSelector } from '../../app/store';
import { Tag } from '../../shared/ui/Tag';

type TFilterProps = {};

export const Filter: FC<TFilterProps> = () => {
  const categories = useAppSelector((state) => state.categories.categories);

  return (
    <Panel>
      <Styled.Wrap>
        <h4>Categories:</h4>
        <Styled.TagsList>
          {categories.map((ctg) => (
            <Tag key={ctg.id}>
              {ctg.title}
            </Tag>
          ))}
        </Styled.TagsList>
        <Button
          buttonType="button"
          className="item item--clear"
          onClick={() => {
            console.log("filter clear");
          }}
        >
          Clear filter
        </Button>
      </Styled.Wrap>
    </Panel>
  );
};
