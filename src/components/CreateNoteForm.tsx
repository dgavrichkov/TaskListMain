import React, { useState } from "react";
import { Button, BoldButton } from "./Button";
import styled from "styled-components";
import { useActions } from "../hooks/useActions";

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
      <Form className={`todo-create ${pageClass}`}>
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
      </Form>
    );
};

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 30px;
  input {
    grid-column: span 4;
    display: block;
    border: none;
    border-radius: 20px;
    padding: 10px 25px;
    font-size: 18px;
    background: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadows.input};
    color: inherit;
  }
  button {
    grid-column: span 2;
  }
`;