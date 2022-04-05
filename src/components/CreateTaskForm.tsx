import { Button, BoldButton } from "./Button";
import { useActions } from "../hooks/useActions";
import { StyledForm } from "./styled/StyledForm";
import { useInput } from "../hooks/useInput";

type FormProps = {
  pageClass?: string;
};

export const CreateTaskForm = ({ pageClass }: FormProps) => {
  const name = useInput({
    initialValue: "",
    validationSettings: { isRequired: true },
  });
  const category = useInput({
    initialValue: "",
    validationSettings: { isRequired: true },
  });

  const { addTaskAction } = useActions();

  const handleClear = () => {
    name.clearInput();
    category.clearInput();
  };

  const handleAdd = () => {
    if (!name.value || !category.value) {
      return;
    }
    addTaskAction({
      name: name.value,
      category: category.value,
    });
    handleClear();
  };

  return (
    <StyledForm className={pageClass}>
      <input
        type="text"
        placeholder="add task"
        value={name.value}
        onChange={name.onChange}
        onBlur={name.onBlur}
      />
      <input
        type="text"
        placeholder="tag"
        value={category.value}
        onChange={category.onChange}
        onBlur={category.onBlur}
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
