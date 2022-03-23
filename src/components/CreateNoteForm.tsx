import { Button, BoldButton } from "./Button";
import { useActions } from "../hooks/useActions";
import { StyledForm } from "./styled/StyledForm";
import { useInput } from "../hooks/useInput";
import { useEffect } from "react";

type FormProps = {
  pageClass?: string;
};

export const CreateNoteForm = ({ pageClass }: FormProps) => {
  const name = useInput("", { isRequired: true, minLength: 5 });
  const text = useInput("", { minLength: 10 });
  const category = useInput("");

  const { addNoteAction } = useActions();

  useEffect(() => {
    console.log(name);
  }, [name.value]);

  const handleClear = () => {
    name.clearInput();
    text.clearInput();
    category.clearInput();
  };

  const handleAdd = () => {
    if (!name || !category) {
      return;
    }
    addNoteAction({
      name: name.value,
      text: text.value,
      category: category.value,
    });
    handleClear();
  };

  return (
    <StyledForm className={pageClass}>
      <input
        className={name.isDirty && !name.validations.isValid ? "invalid" : ""}
        type="text"
        placeholder="add note title"
        value={name.value}
        onChange={name.onChange}
        onBlur={name.onBlur}
      />
      <input
        type="text"
        placeholder="category"
        value={category.value}
        onChange={category.onChange}
        onBlur={category.onBlur}
      />
      <textarea
        rows={3}
        placeholder="add note text"
        value={text.value}
        onChange={text.onChange}
        onBlur={text.onBlur}
      ></textarea>
      <BoldButton buttonType="button" onClick={handleAdd}>
        Add
      </BoldButton>
      <Button buttonType="button" onClick={handleClear}>
        Clear
      </Button>
    </StyledForm>
  );
};
