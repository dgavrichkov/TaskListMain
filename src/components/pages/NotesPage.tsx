import nextId from "react-id-generator";
import { Portal } from '../../entities/Portal';
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getNotesCategories } from "../../store/selectors/getNotesCategories";
import { CategoryFilter } from "../CategoryFilter";
import { CreateNoteForm } from "../CreateNoteForm";
import { NotesList } from "../NotesList";
import { StyledListPageWrap } from "../styled/StyledListPageWrap";

export const NotesPage = () => {
  const filter = useTypedSelector((state) => state.notesFilter);
  const categories = useTypedSelector((state) =>
    getNotesCategories(state.notes)
  );
  const tags = Array.from(categories).map((category) => {
    return { id: nextId(), tagname: category };
  });
  const { notesFilterChangeAction } = useActions();

  return (
    <StyledListPageWrap>
      <h2 className="title">Notes</h2>
      <section className="form">
        <CreateNoteForm />
      </section>
      <section className="aside">
        <CategoryFilter
          filter={filter}
          tags={tags}
          onClickAction={notesFilterChangeAction}
        />
      </section>
      <section className="content">
        <NotesList />
      </section>
      <Portal portalElement={<div>Notes portal block</div>} portalId="header-portal" />
    </StyledListPageWrap>
  );
};
