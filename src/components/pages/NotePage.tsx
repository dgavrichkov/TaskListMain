import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getNoteFromState } from "../../store/selectors/note";
import { StyledDetailPageWrap } from "../styled/StyledDetailPageWrap";

type ParamTypes = {
    noteId: string
}

export const NotePage = () => {
    // ??? noteId type
    const { noteId } = useParams<ParamTypes>();
    const note = useTypedSelector((state) => getNoteFromState(state, noteId))

    useEffect(() => {
        console.log(typeof note);
    })

    return (
        <>
            {
                typeof note === "object" &&
                <StyledDetailPageWrap>
                    <h3>{note.name}</h3>
                    <p>{note.text}</p>
                </StyledDetailPageWrap>
            }
        </>
        
    )
}