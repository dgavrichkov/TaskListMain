import React, { FC } from "react";
import styled from "styled-components";
import { useTypedSelector } from "../hooks/useTypedSelector";

const StyledNotes = styled.div`
    padding: 10px;
`

type ListProps = {
    pageClass: string;
}

export const Notes: FC<ListProps> = ({pageClass}) => {
    const { notes } = useTypedSelector((state) => state.notes);
    return (
        <StyledNotes className={pageClass}>
            <h2>Notes</h2>
            {notes && (
                notes.map((note: any) => (
                    <article key={note.id}>
                        <h3>{note.name}</h3>
                        <p>{note.text}</p>
                    </article>
                ))
            )}
        </StyledNotes>
    )
}