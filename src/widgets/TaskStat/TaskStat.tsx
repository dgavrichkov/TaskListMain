import { FC } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../app/store';

type TStatProps = {
  pageClass?: string;
};

export const TaskStat: FC<TStatProps> = ({ pageClass }) => {
  const tasks = useAppSelector((state) =>
    state.tasks.idList.map((id: string) => state.tasks.data[id]),
  );

  const countAllTasks = () => {
    return tasks.length;
  };

  const countDoneTasks = () => {
    return tasks.filter((task) => task.done).length;
  };

  return (
    <StyledWrap className={`${pageClass}`}>
      <p>Всего - {countAllTasks()}</p>
      <p>Сделано - {countDoneTasks()}</p>
    </StyledWrap>
  );
};

const StyledWrap = styled.div`
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.shadows.button};
  padding: 14px;
  p {
    font-size: 18px;
    margin: 0;
    padding: 0;
    &:not(:last-child) {
      margin-bottom: 14px;
    }
  }
`;
