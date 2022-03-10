import styled from "styled-components";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { getNotesFromState } from "../store/selectors/notes";
import { Note as TypeNote } from "../types/Note";
import { Note } from "./Note";

type ListProps = {
    pageClass?: string;
}

export const NotesList = ({pageClass}: ListProps) => {
    const notes = useTypedSelector(getNotesFromState);

    return (
        <StyledNotes className={pageClass}>
            <div className="list">
                {notes && (
                    notes.map((note: TypeNote) => (
                        <Note key={note.id} id={note.id} name={note.name} text={note.text} category={note.category}/>
                    ))
                )}
            </div>
        </StyledNotes>
    )
}

const StyledNotes = styled.div`
    .title {
        margin-bottom: 28px;
    }

    .list {
        display: grid;
        grid-template-columns: 1fr;
        gap: 14px;
    }

`