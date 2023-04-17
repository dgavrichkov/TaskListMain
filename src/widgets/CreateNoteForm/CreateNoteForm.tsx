import { Button } from "../../shared/ui";
import { FormField, useInput, useForm } from "../../shared/lib/Form";
import { StyledCreateForm } from '../../shared/layouts';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { createCategory, createNote, findCategoryByTitle } from '../../entities';
import { TCategory } from '../../entities/categories/model/categories.interface';

type FormProps = {
  pageClass?: string;
};

export const CreateNoteForm = ({ pageClass }: FormProps) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categories);
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

  const handleClear = () => {
    name.clearInput();
    text.clearInput();
    category.clearInput();
  };

  const handleAdd = () => {
    if (!name || !category) {
      return;
    }
    const preparedId = 'category-id-' + Date.now().toString();
    const storedCategory = findCategoryByTitle(categories, category.value);
    if(!storedCategory) {
      const newCategory: TCategory = {
        id: preparedId,
        title: category.value,
      };
      dispatch(createCategory(newCategory));
    }
    dispatch(
      createNote({
        name: name.value,
        text: text.value,
        categoryID: storedCategory?.id || preparedId,
      })
    );
    handleClear();
  };

  return (
    <StyledCreateForm className={pageClass}>
      <FormField
        state={name}
        title="note title"
        id="note-name"
        name="note-name"
        placeholder="add note title"
      />
      <FormField
        state={category}
        title="note category"
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
