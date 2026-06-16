/* eslint-disable react/prop-types */
import { mockLongUsersList } from '@/features/Examples/VirtualizationExample/mock';
import { UserRow } from '@/features/Examples/VirtualizationExample/ui/UserRow';
import { MyVirtualList } from '@/shared/ui/MyVirtualList';
import { List } from 'react-window';

export const VirtualizationExample = () => {
  return (
    <div>
      {/* <h3>Virtualization example - react-window</h3>
      <div style={{ height: 200 }}>
        <List
          rowComponent={UserRow}
          rowCount={mockLongUsersList.length}
          rowHeight={25}
          rowProps={{ users: mockLongUsersList }}
        />
      </div> */}
      <h3>Virtualization example - custom</h3>
      <MyVirtualList
        listHeight={300}
        rowComponent={(props) => (
          <div style={props.style} key={props.index}>
            {props.index}
          </div>
        )}
        rowHeight={25}
        rowCount={200}
      />
    </div>
  );
};
