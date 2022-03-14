import React, { useState } from "react";
import { Button, BoldButton } from "./Button";
import { useActions } from "../hooks/useActions";
import { StyledForm } from "./styled/StyledForm";

type FormProps = {
    pageClass?: string;
};

export const CreateTaskForm = ({ pageClass }: FormProps) => {
    const [name, setName] = useState("");
    const [tag, setTag] = useState("");
  
    const { addTaskAction } = useActions();

    const handleClear = () => {
      setName("");
      setTag("");
    };
  
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    };
  
    const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTag(e.target.value);
    };
  
    const handleAdd = () => {
      if (!name || !tag) {
        return;
      }
      addTaskAction({
        name,
        tag
      });
      handleClear();
    };
  
    return (
      <StyledForm className={`todo-create ${pageClass}`}>
        <input
          type="text"
          placeholder="add task"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="tag"
          value={tag}
          onChange={handleTagChange}
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