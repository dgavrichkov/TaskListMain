import styled from "styled-components"
import { useActions } from "../hooks/useActions"
import { Note as TypeNote }  from "../types/Note"
import { Button } from "./Button"

export const Note = ({id, name, text, category} : TypeNote) => {
    const { delNoteAction } = useActions();

    return (
        <Article>
            <h3 className="name">{name}</h3>
            <p className="text">{text}</p>
            {category && <i className="category">{category}</i>}
            <Button
                className="delete"
                onClick={() => {
                    delNoteAction(id)
                }}
            >Удалить</Button>
        </Article>
    )
}

const Article = styled.article`
    border-radius: 4px;
    box-shadow: ${(props) => props.theme.shadows.button};
    padding: 14px;
    display: grid;
    gap: 14px;
    column-gap: 14px;
    border: 1px solid transparent;
    .delete {
        margin-top: 14px;
    }
`