import { Input } from '@/shared/shadcn/ui/Input';
import styles from './VerbAdmin.module.scss';
import { useForm } from '@tanstack/react-form';
import { Button } from '@/shared/shadcn/ui/button';

export const VerbAdmin = () => {
  const { Field, Subscribe, handleSubmit, reset } = useForm({
    defaultValues: {
      title: '',
      words: [],
      meaning: '',
      translation: '',
      examples: [''] as Array<string>,
    },
    onSubmit: async ({ value }) => {
      // нужно проверить, что такого фразовика еще нет
      // нужно разложить глагол на слова и проверить, что все слова есть в базе
      // если нет - добавить
      // если есть - добавить фразовик
      console.log(value);
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
      <Field name="title">
        {({ state, handleChange, handleBlur }) => (
          <div className={styles.field}>
            <label>Title</label>
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
      <Field name="meaning">
        {({ state, handleChange, handleBlur }) => (
          <div className={styles.field}>
            <label>Meaning</label>
            <Input
              placeholder="meaning"
              type="text"
              value={state.value}
              onBlur={handleBlur}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        )}
      </Field>
      <Field name="translation">
        {({ state, handleChange, handleBlur }) => (
          <div className={styles.field}>
            <label>Ru Translation</label>
            <Input
              placeholder="ru translation"
              type="text"
              value={state.value}
              onBlur={handleBlur}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
        )}
      </Field>
      <Field mode="array" name="examples">
        {(field) => (
          <div>
            {field.state.value.map((_, i) => {
              return (
                <Field key={i} name={`examples[${i}]`}>
                  {(subField) => {
                    return (
                      <div className={styles.field}>
                        <label>Example {i}</label>
                        <Input
                          value={subField.state.value}
                          onChange={(e) => subField.handleChange(e.target.value)}
                        />
                      </div>
                    );
                  }}
                </Field>
              );
            })}
            <Button className="mt-2" type="button" onClick={() => field.pushValue('')}>
              Add example
            </Button>
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
