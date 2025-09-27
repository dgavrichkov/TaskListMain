import { usePopover } from '@/shared/ui/Popover/hooks/usePopover';
import { Button } from '@/shared/ui';
import { CtxMenuBody } from './CtxMenuBody';

export function IndependedButtonExample() {
  const menu = usePopover();

  return (
    <div className="flex gap-4 mt-4">
      <Button
        onClick={(e) => {
          menu.open({
            renderer: () => <CtxMenuBody>Custom content</CtxMenuBody>,
            clientX: e.clientX,
            clientY: e.clientY,
            anchorEl: e.currentTarget as HTMLElement,
          });
        }}
      >
        Click for Popover
      </Button>
      {/* а вот ховер теперь не работает нормально... */}
      {/* <Button
        onPointerEnter={(e) => {
          menu.open({
            renderer: () => <>Custom Content</>,
            clientX: e.clientX,
            clientY: e.clientY,
            anchorEl: e.currentTarget as HTMLElement,
          });
        }}
        onPointerLeave={() => {
          menu.close();
        }}
      >
        Hover for Popover
      </Button> */}
    </div>
  );
}
