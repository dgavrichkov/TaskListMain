import { Button } from "../../shared/ui";
import { FormField, useForm, useInput } from "../../shared/lib/Form";
import { StyledCreateForm } from '../../shared/layouts';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { createCategory, createTask, findCategoryByTitle } from '../../entities';
import { TCategory } from '../../entities/categories/model/categories.interface';

type FormProps = {
  pageClass?: string;
};

export const CreateTaskForm = ({ pageClass }: FormProps) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categories);
  const name = useInput({
    initialValue: "",
    validationSettings: { isRequired: true },
  });
  const category = useInput({
    initialValue: "",
    validationSettings: { isRequired: true },
  });
  const form = useForm(name, category);

  const handleClear = () => {
    name.clearInput();
    category.clearInput();
  };

  const handleAdd = () => {
    if (!name.value || !category.value) {
      return;
    }
    const preparedId = 'category-id-' + Date.now().toString();
    const storedCategory = findCategoryByTitle(categories, category.value);
    if (!storedCategory) {
      const newCategory: TCategory = {
        id: preparedId,
        title: category.value,
      };
      dispatch(createCategory(newCategory));
    }
    dispatch(
      createTask({
        name: name.value,
        categoryID: storedCategory?.id || preparedId,
      })
    );
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
