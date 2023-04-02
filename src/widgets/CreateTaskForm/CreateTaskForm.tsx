import { Button } from "../../shared/ui";
import { useActions } from "../../hooks/useActions";
import { FormField, useForm, useInput } from "../../shared/lib/Form";
import { StyledCreateForm } from '../../shared/layouts';

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
    <StyledCreateForm className={pageClass}>
      <FormField
        state={name}
        title="task title"
        id="task-name"
        name="task-name"
        placeholder="add task"
      />
      <FormField
        state={category}
        title="task category"
        id="task-category"
        name="task-category"
        placeholder="task category"
      />
      <Button
        buttonType="button"
        onClick={handleAdd}
        disabled={form.validity && form.touched ? false : true}
        isBold
      >
        Add
      </Button>
      <Button
        buttonType="button"
        onClick={handleClear}
        disabled={form.touched ? false : true}
      >
        Clear
      </Button>
    </StyledCreateForm>
  );
};
