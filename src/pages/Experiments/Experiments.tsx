import BuggyCounter from './ui/BuggyCounter';
import CounterErrorBoundary from './ui/CounterErrorBoundary';
import Oldschool from './ui/Oldschool';

export const Experiments = () => {
  return (
    <>
      <div>Experiments!</div>
      <hr />
      <CounterErrorBoundary>
        <BuggyCounter />
        <Oldschool />
      </CounterErrorBoundary>
    </>
  );
};
