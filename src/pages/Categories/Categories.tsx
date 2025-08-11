import { Button } from '@/shared/ui';
import { Input } from '@/shared/ui/Input';
import { useForm } from '@tanstack/react-form';
import { useCategoriesQuery } from './useCategoriesQuery';
import { UpdateCategory } from './types';

export const Categories = () => {
  const { addCategory, deleteCategory, editCategory, data, status, isDeleting, isEditing } =
    useCategoriesQuery(['categories']);
  const { Field, Subscribe, handleSubmit, reset } = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
    onSubmit: async ({ value }) => {
      addCategory(value);
      reset();
    },
  });

  const handleDeleteCategory = (id: string) => {
    deleteCategory(id);
  };

  const handleUpdateCategory = (id: string, data: UpdateCategory) => {
    console.log('Я не готов');
  };

  return (
    <div>
      <h2 className="font-bold mb-5">Перечень категорий</h2>
      <div>
        {!data || data.length === 0 ? (
          <>Пусто :(</>
        ) : (
          data.map((item) => (
            <div key={item.id}>
              <span title={item.description}>{item.title}</span>
              <span className="ml-4">
                <button
                  className="cursor-pointer"
                  title="delete node"
                  onClick={() => handleDeleteCategory(item.id)}
                >
                  {isDeleting ? '🔃' : '➖'}
                </button>
                <button
                  className="ml-2 cursor-pointer"
                  onClick={() => handleUpdateCategory(item.id, item)}
                >
                  {isEditing ? '🔃' : '🖍️'}
                </button>
              </span>
            </div>
          ))
        )}
      </div>

      <section className="mt-10">
        <h3 className="font-bold mb-5">Create Category</h3>
        <form
          className="categoryCreation grid gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSubmit();
          }}
        >
          <Field name="title">
            {({ state, handleChange, handleBlur }) => (
              <Input
                className="input input-bordered w-full"
                placeholder="Название Категории"
                type="text"
                value={state.value}
                onBlur={handleBlur}
                onChange={(e) => handleChange(e.target.value)}
              />
            )}
          </Field>
          <Field name="description">
            {({ state, handleChange, handleBlur }) => (
              <Input
                className="input input-bordered w-full"
                placeholder="Описание Категории"
                type="text"
                value={state.value}
                onBlur={handleBlur}
                onChange={(e) => handleChange(e.target.value)}
              />
            )}
          </Field>
          <Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
            {([canSubmit, isSubmitting]) => (
              <>
                <Button className="mt-4 cursor-pointer" disabled={!canSubmit} type="submit">
                  {isSubmitting ? '...' : 'Submit'}
                </Button>
              </>
            )}
          </Subscribe>
        </form>
      </section>
    </div>
  );
};
