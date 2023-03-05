import { FC, ReactNode, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  portalId?: string;
  portalElement?: ReactNode;
}

export const Portal: FC<IPortalProps> = ({ portalId, portalElement, children }) => {
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>();
  useLayoutEffect(() => {
    if (portalId) {
      const regex = /^[^.#]+$/;
      const isSelector = !regex.test(portalId);
      const el = isSelector ? document.querySelector<HTMLElement>(portalId) : document.getElementById(portalId);
      setPortalTarget(el);
    }
  }, [portalId]);

  if (!portalTarget) {
    return <>No data for portal</>
  }

  return (
    <div>{createPortal(portalElement || children, portalTarget)}</div>
  )
};
