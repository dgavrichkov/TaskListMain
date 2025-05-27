import { useForm } from '@tanstack/react-form';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { verbModel } from '@/entities/verb';
import { Input } from '@/shared/shadcn/ui/Input';
import styles from './VerbAdmin.module.scss';
import { Button } from '@/shared/shadcn/ui/button';

export const VerbAdminWordForm = () => {
  const dispatch = useAppDispatch();
  const words = useAppSelector(verbModel.selectors.selectWordsList);

  const { Field, Subscribe, handleSubmit, reset } = useForm({
    defaultValues: {
      label: '',
    },
    onSubmit: async ({ value }) => {
      console.log('new Word', value);
      // TODO - нужно проверить, что такого слова еще нет
      if (words.find((word) => word.label === value.label)) {
        alert('Такое слово уже есть');
        return;
      }

      dispatch<any>(verbModel.actions.postWord(value.label));
    },
  });

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit();
      }}
    >
      <Field name="label">
        {({ state, handleChange, handleBlur }) => (
          <div className={styles.field}>
            <label>Label</label>
            <Input
              placeholder="title"
              type="text"
              value={state.value}
              onBlur={handleBlur}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        )}
      </Field>
      <Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <>
            <Button disabled={!canSubmit} type="submit">
              {isSubmitting ? '...' : 'Submit'}
            </Button>
            <Button type="reset" onClick={() => reset()}>
              Reset
            </Button>
          </>
        )}
      </Subscribe>
    </form>
  );
};
