import React, { useState } from "react";
import { Button, BoldButton } from "./Button";
import { useActions } from "../hooks/useActions";
import { StyledForm } from "./styled/StyledForm";

type FormProps = {
    pageClass?: string;
};

export const CreateNoteForm = ({ pageClass }: FormProps) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [text, setText] = useState("");
  
    const { addNoteAction } = useActions();

    const handleClear = () => {
      setName("");
      setText("");
      setCategory("");
    };
  
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };
  
    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCategory(e.target.value);
    };
  
    const handleAdd = () => {
      if (!name || !category) {
        return;
      }
      addNoteAction({
        name,
        text,
        category
      });
      handleClear();
    };
  
    return (
      <StyledForm className={`todo-create ${pageClass}`}>
        <input
          type="text"
          placeholder="add note title"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="add note text"
          value={text}
          onChange={handleTextChange}
        />
        <input
          type="text"
          placeholder="category"
          value={category}
          onChange={handleCategoryChange}
        />
        <BoldButton buttonType="button" onClick={handleAdd}>
          Add
        </BoldButton>
        <Button buttonType="button" onClick={handleClear}>
          Clear
        </Button>
      </StyledForm>
    );
};