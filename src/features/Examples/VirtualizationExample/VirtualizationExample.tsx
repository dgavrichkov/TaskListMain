import { mockLongUsersList } from '@/features/Examples/VirtualizationExample/mock';
import { UserRow } from '@/features/Examples/VirtualizationExample/ui/UserRow';
import { List } from 'react-window';

export const VirtualizationExample = () => {
  return (
    <div>
      <h3>Virtualization example - react-window</h3>
      <div style={{ height: 200 }}>
        <List
          rowComponent={UserRow}
          rowCount={mockLongUsersList.length}
          rowHeight={25}
          rowProps={{ users: mockLongUsersList }}
        />
      </div>
    </div>
  );
};
