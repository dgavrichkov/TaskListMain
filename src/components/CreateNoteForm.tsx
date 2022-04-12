import { Button, BoldButton } from "./Button";
import { useActions } from "../hooks/useActions";
import { StyledForm } from "./styled/StyledForm";
import { useInput } from "../hooks/useInput";
import { FormField } from "./elements/FormField";
import { useForm } from "../hooks/useForm";

type FormProps = {
  pageClass?: string;
};

export const CreateNoteForm = ({ pageClass }: FormProps) => {
  const name = useInput({
    initialValue: "",
    validationSettings: { isRequired: true, minLength: 5 },
  });
  const category = useInput({
    initialValue: "",
    validationSettings: { isRequired: true },
  });
  const text = useInput({
    initialValue: "",
    validationSettings: { isRequired: true, minLength: 10 },
  });
  const form = useForm(name, category, text);

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
      <BoldButton
        buttonType="button"
        onClick={handleAdd}
        disabled={form.validity && form.touched ? false : true}
      >
        Add
      </BoldButton>
      <Button
        buttonType="button"
        onClick={handleClear}
        disabled={form.touched ? false : true}
      >
        Clear
      </Button>
    </StyledForm>
  );
};
