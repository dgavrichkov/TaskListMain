import React, { FC } from "react";
import styled from "styled-components";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { INote } from "../types/types";
import { Note } from "./Note";

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

type ListProps = {
    pageClass: string;
}

export const NotesList: FC<ListProps> = ({pageClass}) => {
    const { notes } = useTypedSelector((state) => state.notes);
    return (
        <StyledNotes className={pageClass}>
            <h2 className="title">Notes</h2>
            <div className="list">
                {notes && (
                    notes.map((note: INote) => (
                        <Note key={note.id} id={note.id} name={note.name} text={note.text} category={note.category}/>
                    ))
                )}
            </div>
        </StyledNotes>
    )
}