import { PropsWithChildren, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type TPortalElement = HTMLElement | Element | null;

interface IPortalProps {
  portalId?: string;
  portalElement?: (() => TPortalElement) | HTMLElement | Element | string;
}

export const Portal = ({ portalId, portalElement, children }: PropsWithChildren<IPortalProps>) => {
  const [portalTarget, setPortalTarget] = useState<TPortalElement>();
  useLayoutEffect(() => {
    if (portalId) {
      const el = document.getElementById(portalId);
      setPortalTarget(el);
      return;
    }
    if (portalElement) {
      let el: TPortalElement = null;
      if (typeof portalElement === 'function') {
        el = portalElement();
      } else if (typeof portalElement === 'string') {
        el = document.querySelector<HTMLElement>(portalElement);
      } else {
        el = portalElement;
      }
      setPortalTarget(el || document.body);
      return;
    }
    setPortalTarget(document.body);
  }, [portalId, portalElement]);

  if (!portalTarget) {
    return null;
  }

  return createPortal(children, portalTarget);
};
