import { Portal } from '../../shared/lib/Portal';
import { CreateNoteForm, NotesList } from "../../widgets";
import { StyledListPageWrap } from "../../shared/layouts";
import { useAppSelector } from '../../app/store';

export const Notes = () => {
  const categories = useAppSelector(state => state.categories.categories);
  return (
    <StyledListPageWrap>
      <h2 className="title">Notes</h2>
      <section className="form">
        <CreateNoteForm />
      </section>
      <section className="aside">
        <div>
          <h4>Categories:</h4>
          {categories.map((ctg) => (
            <div key={ctg.id} style={{margin: '4px'}}>{ctg.title}</div>
          ))}
        </div>
      </section>
      <section className="content">
        <NotesList />
      </section>
      <Portal portalId='header-portal'><div>Notes portal block</div></Portal>
    </StyledListPageWrap>
  );
};
