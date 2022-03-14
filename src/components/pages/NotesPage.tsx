import { CreateNoteForm } from "../CreateNoteForm"
import { NotesList } from "../NotesList"
import { StyledListPageWrap } from "../styled/StyledListPageWrap"

export const NotesPage = () => {
    return (
        <StyledListPageWrap>
            <h2 className="title">Notes</h2>
            <section className="form">
                <CreateNoteForm />
            </section>
            <section className="aside"></section>
            <section className="content">
                <NotesList />
            </section>
        </StyledListPageWrap>
    )
}