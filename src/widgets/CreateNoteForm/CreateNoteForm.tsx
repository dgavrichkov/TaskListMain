import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'app/store';
import { createCategory, createNote, findCategoryByTitle, TCategory } from 'entities';
import { FormField, useInput, useForm } from 'shared/lib/Form';
import { StyledCreateForm } from 'shared/layouts';
import { Button } from 'shared/ui';

type TFormProps = {
  pageClass?: string;
};

export const CreateNoteForm: FC<TFormProps> = ({ pageClass }) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categories);
  const name = useInput({
    initialValue: '',
    validationSettings: { isRequired: true, minLength: 5 },
  });
  const category = useInput({
    initialValue: '',
    validationSettings: { isRequired: true },
  });
  const text = useInput({
    initialValue: '',
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
    if (!storedCategory) {
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
      }),
    );
    handleClear();
  };

  return (
    <StyledCreateForm className={pageClass}>
      <FormField
        id="note-name"
        name="note-name"
        placeholder="add note title"
        state={name}
        title="note title"
      />
      <FormField
        id="note-category"
        name="note-category"
        placeholder="category"
        state={category}
        title="note category"
      />
      <FormField
        id="note-text"
        name="note-text"
        placeholder="add note text"
        state={text}
        tag="textarea"
        title="note text"
      />
      <Button
        isBold
        buttonType="button"
        disabled={form.validity && form.touched ? false : true}
        onClick={handleAdd}
      >
        Add
      </Button>
      <Button buttonType="button" disabled={form.touched ? false : true} onClick={handleClear}>
        Clear
      </Button>
    </StyledCreateForm>
  );
};
