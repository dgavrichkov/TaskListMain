import { IndependedButtonExample } from './IndependentButton';
import { ContextMenuProvider } from './ContextMenuProvider';
import DemoTree from './DemoTree';

export const NavigationExample = () => {
  return (
    <ContextMenuProvider>
      <h1 className="mb-2 font-bold">Tree demo with ctx menu</h1>
      <DemoTree />
      <IndependedButtonExample />
    </ContextMenuProvider>
  );
};
