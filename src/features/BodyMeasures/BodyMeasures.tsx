import { useForm } from '@tanstack/react-form';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui';

export const BodyMeasures = () => {
  const { Field, Subscribe, handleSubmit, reset } = useForm({
    defaultValues: {
      chest: '',
      waist: '',
      hips: '',
    },
    onSubmit: async ({ value }) => {
      reset();
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSubmit();
        }}
      >
        <Field name="chest">
          {({ state, handleChange, handleBlur }) => (
            <Input
              className="input input-bordered w-full"
              placeholder="Грудь"
              type="text"
              value={state.value}
              onBlur={handleBlur}
              onChange={(e) => handleChange(e.target.value)}
            />
          )}
        </Field>
        <Field name="waist">
          {({ state, handleChange, handleBlur }) => (
            <Input
              className="input input-bordered w-full"
              placeholder="Талия"
              type="text"
              value={state.value}
              onBlur={handleBlur}
              onChange={(e) => handleChange(e.target.value)}
            />
          )}
        </Field>
        <Field name="hips">
          {({ state, handleChange, handleBlur }) => (
            <Input
              className="input input-bordered w-full"
              placeholder="Бедра"
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
    </div>
  );
};
