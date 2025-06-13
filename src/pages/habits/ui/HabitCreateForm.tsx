import { Button } from '@/shared/shadcn/ui/button';
import { Input } from '@/shared/shadcn/ui/Input';
import { useForm } from '@tanstack/react-form';
import { habitStore } from '../model/store';

export const HabitCreateForm = () => {
  const { Field, Subscribe, handleSubmit, reset } = useForm({
    defaultValues: {
      title: '',
      description: '',
      createdAt: new Date(),
      archived: false,
    },
    onSubmit: async ({ value }) => {
      habitStore.createHabit(value.title, value.description);
      reset();
    },
  });

  return (
    <form
      className="grid gap-2"
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
            placeholder="Название привычки"
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
            placeholder="Описание привычки"
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
  );
};
