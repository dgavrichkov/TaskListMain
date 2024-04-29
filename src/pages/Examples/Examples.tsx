import TaskApp from './ReducerContext';
import BuggyCounter from './ui/BuggyCounter';
import CounterErrorBoundary from './ui/CounterErrorBoundary';
import { ExampleContainer } from './ui/ExampleContainer';

export const Examples = () => {
  return (
    <>
      <h1>Examples</h1>
      <hr style={{margin: '12px 0'}} />
      <ExampleContainer>
        <CounterErrorBoundary>
          <BuggyCounter />
        </CounterErrorBoundary>
      </ExampleContainer>
      <hr style={{margin: '12px 0'}} />
      <ExampleContainer>
        <TaskApp />
      </ExampleContainer>
    </>
  );
};
