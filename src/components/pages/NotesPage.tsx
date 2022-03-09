import { NotesList } from "../NotesList"

export const NotesPage = () => {
    return (
        <>
            <h2 className="title">Notes</h2>
            <section className="aside"></section>
            <section className="content">
                <NotesList />
            </section>
        </>
    )
}