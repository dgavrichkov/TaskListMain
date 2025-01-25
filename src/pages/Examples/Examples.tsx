import { SimpleTicker, IntervalTicker } from '../../features/Clock';
import { CounterWithCustomStore } from '../../features/CounterWithCustomStore';
import TaskApp from './ReducerContext';
import BuggyCounter from './ui/BuggyCounter';
import CounterErrorBoundary from './ui/CounterErrorBoundary';
import { ExampleContainer } from './ui/ExampleContainer';

export const Examples = () => {
  return (
    <>
      <h1>Examples</h1>
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
      <ExampleContainer columns={3}>
        <SimpleTicker />
        <IntervalTicker />
      </ExampleContainer>
    </>
  );
};
