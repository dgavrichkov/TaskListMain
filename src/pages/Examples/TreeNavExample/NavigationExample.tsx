import { IndependedButtonExample } from './IndependentButton';
import DemoTree from './DemoTree';
import { PopoverProvider } from '@/shared/ui/Popover/PopoverProvider';

export const NavigationExample = () => {
  return (
    <PopoverProvider>
      <h1 className="mb-2 font-bold">Tree demo with ctx menu</h1>
      <DemoTree />
      <IndependedButtonExample />
    </PopoverProvider>
  );
};
