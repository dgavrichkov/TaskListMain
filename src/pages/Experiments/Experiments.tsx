import BuggyCounter from './ui/BuggyCounter';
import CounterErrorBoundary from './ui/CounterErrorBoundary';

export const Experiments = () => {
  return (
    <>
      <div>Experiments!</div>
      <hr />
      <CounterErrorBoundary>
        <BuggyCounter />
      </CounterErrorBoundary>
    </>
  );
};
