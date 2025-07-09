import { FC } from 'react';
import { Button } from '../../shared/ui';
import { FormField, useForm, useInput } from '../../shared/lib/Form';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { createCategory, createTask, findCategoryByTitle } from '../../entities';
import { TCategory } from '../../entities/categories/model/categories.interface';

type TFormProps = {
  pageClass?: string;
};

export const CreateTaskForm: FC<TFormProps> = ({ pageClass }) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categories);
  const name = useInput({
    initialValue: '',
    validationSettings: { isRequired: true },
  });
  const category = useInput({
    initialValue: '',
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
      }),
    );
    handleClear();
  };

  return (
    <div className={pageClass}>
      <FormField
        id="task-name"
        name="task-name"
        placeholder="add task"
        state={name}
        title="task title"
      />
      <FormField
        id="task-category"
        name="task-category"
        placeholder="task category"
        state={category}
        title="task category"
      />
      <Button
        disabled={form.validity && form.touched ? false : true}
        type="button"
        onClick={handleAdd}
      >
        Add
      </Button>
      <Button disabled={form.touched ? false : true} type="button" onClick={handleClear}>
        Clear
      </Button>
    </div>
  );
};
