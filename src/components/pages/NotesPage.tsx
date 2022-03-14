import { CategoryFilter } from "../CategoryFilter";
import { CreateNoteForm } from "../CreateNoteForm";
import { NotesList } from "../NotesList";
import { StyledListPageWrap } from "../styled/StyledListPageWrap";

export const NotesPage = () => {
  return (
    <StyledListPageWrap>
      <h2 className="title">Notes</h2>
      <section className="form">
        <CreateNoteForm />
      </section>
      <section className="aside">
        <CategoryFilter />
      </section>
      <section className="content">
        <NotesList />
      </section>
    </StyledListPageWrap>
  );
};
