import { IEntry } from '../../model/types';

type Props = {
  habitEntry: IEntry;
};

export const HabitEntry = ({ habitEntry }: Props) => {
  return (
    <div>
      {habitEntry.completed ? (
        <span aria-label="completed" role="img">
          ✅
        </span>
      ) : (
        <span aria-label="not completed" role="img">
          ⬜️
        </span>
      )}
    </div>
  );
};
