import style from './ContextMenu.module.css';
import { Button } from '@/shared/ui';
import { useContextMenu } from './ContextMenuProvider';

export function IndependedButtonExample() {
  const menu = useContextMenu();

  return (
    <div className="flex gap-4 mt-4">
      <Button
        className={style.button}
        onClick={(e) => {
          menu.open({
            render: () => <>Custom content</>,
            clientX: e.clientX,
            clientY: e.clientY,
            anchorEl: e.currentTarget as HTMLElement,
          });
        }}
      >
        Click for Popover
      </Button>
      <Button
        onMouseEnter={(e) => {
          menu.open({
            render: () => <>Custom Content</>,
            clientX: e.clientX,
            clientY: e.clientY,
            anchorEl: e.currentTarget as HTMLElement,
          });
        }}
        onMouseLeave={() => {
          menu.close();
        }}
      >
        Hover for Popover
      </Button>
    </div>
  );
}
