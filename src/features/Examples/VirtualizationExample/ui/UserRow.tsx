import { type RowComponentProps } from 'react-window';
import { User } from '../mock';

export const UserRow = ({
  index,
  users,
  style,
}: RowComponentProps<{
  users: User[];
}>) => {
  const user = users[index];
  return (
    <div className="flex" style={style}>
      {user.id}. {user.email}
    </div>
  );
};
