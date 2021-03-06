import { Button, BoldButton } from "./Button";
import { useActions } from "../hooks/useActions";
import { StyledForm } from "./styled/StyledForm";
import { useInput } from "../hooks/useInput";
import { useForm } from "../hooks/useForm";
import { FormField } from "./elements/FormField";

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
  const form = useForm(name, category);

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
      <FormField
        state={name}
        tag="input"
        title="task title"
        type="text"
        id="task-name"
        name="task-name"
        placeholder="add task"
      />
      <FormField
        state={category}
        tag="input"
        title="task category"
        type="text"
        id="task-category"
        name="task-category"
        placeholder="task category"
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
