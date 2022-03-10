import { CreateNoteForm } from "../CreateNoteForm"
import { NotesList } from "../NotesList"

export const NotesPage = () => {
    return (
        <>
            <h2 className="title">Notes</h2>
            <section className="form">
                <CreateNoteForm />
            </section>
            <section className="aside"></section>
            <section className="content">
                <NotesList />
            </section>
        </>
    )
}