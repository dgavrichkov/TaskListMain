import { TOOLBAR_SLOTS } from '@/shared/constants/toolbarSlots';

/** Тулбар для лэйаута страницы, через портал выводит всякое из рабочей области */
export const Toolbar = () => {
  return (
    <div className="grid grid-cols-12">
      <div id={TOOLBAR_SLOTS.SIDEBAR}></div>
      <div className="col-span-10 flex justify-end" id={TOOLBAR_SLOTS.WORKSPACE}></div>
      <div className="flex justify-end" id={TOOLBAR_SLOTS.RIGHT}></div>
    </div>
  );
};
