import { Input } from '@/shared/shadcn/ui/Input';
import styles from './VerbAdmin.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { useForm } from '@tanstack/react-form';
import { verbModel } from '@/entities/verb';
import { Button } from '@/shared/ui';

export const PhrasalVerbAdminForm = () => {
  const dispatch = useAppDispatch();
  const words = useAppSelector(verbModel.selectors.selectWordsList);
  const phrasals = useAppSelector(verbModel.selectors.selectPhrasals);

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
      // TODO - нужно проверить, что такого фразовика еще нет
      if (phrasals.find((phrasal) => phrasal.title === value.title)) {
        alert('Такой фразовик уже есть');
        return;
      }
      // нужно разложить глагол на слова и проверить, что все слова есть в базе
      // если нет - показать ошибку, мол - иди слово добавь сначала
      // если да - добавить фразовик
      const words: string[] = [];
      const titleWords = value.title.split(' ');
      // TODO - найти слова в справочнике слов words
      // в words засунуть их айдишники

      console.log('new', {
        value,
        words,
      });
      dispatch<any>(
        verbModel.actions.postPharasVerb({
          title: value.title,
          words,
          meaning: value.meaning,
          translation: {
            ru: value.translation,
          },
          examples: value.examples,
        }),
      );
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
