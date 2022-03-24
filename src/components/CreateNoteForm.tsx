import { Button, BoldButton } from "./Button";
import { useActions } from "../hooks/useActions";
import { StyledForm } from "./styled/StyledForm";
import { useInput } from "../hooks/useInput";
import { FormField } from "./elements/FormField";

type FormProps = {
  pageClass?: string;
};

export const CreateNoteForm = ({ pageClass }: FormProps) => {
  const name = useInput("", { isRequired: true, minLength: 5 });
  const text = useInput("", { minLength: 10 });
  const category = useInput("", { isRequired: true });

  const { addNoteAction } = useActions();

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
      <FormField
        state={name}
        tag="input"
        title="note title"
        type="text"
        id="note-name"
        name="note-name"
        placeholder="add note title"
      />
      <FormField
        state={category}
        tag="input"
        title="note category"
        type="text"
        id="note-category"
        name="note-category"
        placeholder="category"
      />
      <FormField
        state={text}
        tag="textarea"
        title="note text"
        id="note-text"
        name="note-text"
        placeholder="add note text"
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
