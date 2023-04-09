import { Portal } from '../../shared/lib/Portal';
import { CreateNoteForm, NotesList } from "../../widgets";
import { StyledListPageWrap } from "../../shared/layouts";

export const Notes = () => {
  return (
    <StyledListPageWrap>
      <h2 className="title">Notes</h2>
      <section className="form">
        <CreateNoteForm />
      </section>
      <section className="aside">
        filter will be reworked soon
      </section>
      <section className="content">
        <NotesList />
      </section>
      <Portal portalId='header-portal'><div>Notes portal block</div></Portal>
    </StyledListPageWrap>
  );
};
