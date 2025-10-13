import { FC } from 'react';
import { Portal } from '../../shared/lib/Portal';
import { CreateNoteForm, NotesList } from '../../widgets';
import { StyledListPageWrap } from '../../shared/layouts';
import { Filter } from '../../features';
import { TOOLBAR_SLOTS } from '@/shared/constants/toolbarSlots';

export const Notes: FC = () => {
  return (
    <StyledListPageWrap>
      <h2 className="title">Notes</h2>
      <section className="form">
        <CreateNoteForm />
      </section>
      <section className="aside">
        <Filter forPage="notes" />
      </section>
      <section className="content">
        <NotesList />
      </section>
      <Portal portalId={TOOLBAR_SLOTS.WORKSPACE}>NOTES PORTAL</Portal>
    </StyledListPageWrap>
  );
};
