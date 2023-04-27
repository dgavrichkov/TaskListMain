import React from 'react';
import { Filter } from 'features';
import { Portal } from 'shared/lib/Portal';
import { StyledListPageWrap } from 'shared/layouts';
import { CreateNoteForm, NotesList } from 'widgets';

export const Notes = () => {
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
      <Portal portalId="header-portal">
        <div>Notes portal block</div>
      </Portal>
    </StyledListPageWrap>
  );
};
