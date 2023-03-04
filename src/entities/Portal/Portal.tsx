import { FC, ReactNode, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  portalId?: string;
  portalElement?: ReactNode;
}

export const Portal: FC<IPortalProps> = ({ portalId, portalElement }) => {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>();
  useLayoutEffect(() => {
    if (portalId) {
      const el = document.getElementById(portalId);
      setPortalTarget(el);
    }
  }, [portalId]);

  if (!portalTarget || !portalElement) {
    return <>No data for portal</>
  }

  return (
    <div>{createPortal(portalElement, portalTarget)}</div>
  )
};
