import React from 'react';
import { SearchComponent } from '@/pages/Examples/ui/SearchComponent';
import { SimpleTicker, IntervalTicker } from '../../features/Clock';
import { CounterWithCustomStore } from '../../features/CounterWithCustomStore';
import TaskApp from './ReducerContext';
import BuggyCounter from './ui/BuggyCounter';
import CounterErrorBoundary from './ui/CounterErrorBoundary';
import { ExampleContainer } from './ui/ExampleContainer';
import { usersStore } from '@/shared/lib/mobx-rq-integrator/usersStore';
import { NavigationExample } from './TreeNavExample';
import { TryDialog } from './TryDialog/TryDialog';
import { Button } from '@/shared/ui';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/shadcn/ui/drawer';

export const Examples = () => {
  return (
    <>
      <h1>Examples</h1>
      <hr style={{ margin: '12px 0' }} />
      <ExampleContainer>
        <Drawer direction="right">
          <DrawerTrigger>Open Drawer</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>This action cannot be undone.</DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </ExampleContainer>
      <hr style={{ margin: '12px 0' }} />
      <ExampleContainer>
        <TryDialog />
      </ExampleContainer>
      <hr style={{ margin: '12px 0' }} />
      <ExampleContainer>
        <CounterErrorBoundary>
          <BuggyCounter />
        </CounterErrorBoundary>
      </ExampleContainer>
      <hr style={{ margin: '12px 0' }} />
      <ExampleContainer>
        <TaskApp />
      </ExampleContainer>
      <hr style={{ margin: '12px 0' }} />
      <ExampleContainer>
        <h3 style={{ marginBottom: 12 }}>Counter with custom store</h3>
        <CounterWithCustomStore />
        <hr style={{ margin: '12px 0' }} />
        <CounterWithCustomStore />
        <hr style={{ margin: '12px 0' }} />
        <CounterWithCustomStore />
      </ExampleContainer>
      <hr style={{ margin: '12px 0' }} />
      <ExampleContainer columns={2}>
        <SimpleTicker />
        <IntervalTicker />
      </ExampleContainer>
      <hr style={{ margin: '12px 0' }} />
      <ExampleContainer>
        <SearchComponent />
      </ExampleContainer>
      <ExampleContainer>
        {usersStore.filteredUsers.map((u: any) => (
          <div className="mb-2" key={u.id}>
            <span className="font-bold">{u.name}</span>
          </div>
        ))}
      </ExampleContainer>
      <hr style={{ margin: '12px 0' }} />
      <ExampleContainer>
        <NavigationExample />
      </ExampleContainer>
    </>
  );
};
