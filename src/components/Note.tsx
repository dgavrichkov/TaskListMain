import styled from "styled-components"
import { Note as TypeNote }  from "../types/Note"

export const Note = ({name, text, category} : TypeNote) => {
    return (
        <Article>
            <h3 className="name">{name}</h3>
            <p className="text">{text}</p>
            {category && <i className="category">{category}</i>}
        </Article>
    )
}

const Article = styled.article`
    border-radius: 4px;
    box-shadow: ${(props) => props.theme.shadows.button};
    padding: 14px;

    gap: 7px;
    column-gap: 14px;
    border: 1px solid transparent;
    .name {
        margin-bottom: 7px;
    }
    .text {
        &:not(:last-child) {
            margin-bottom: 14px;
        }
    }
`