import { useContext } from 'react';

import { PopoverContext, TPopoverContext } from '../PopoverProvider';

/**
 * Получение контрола для поповера из PopoverContext
 */
export const usePopover = (): TPopoverContext => {
  const popoverControl = useContext(PopoverContext);

  if (!popoverControl) {
    throw new Error('usePopover must be used within <PopoverProvider>');
  }

  return popoverControl;
};
