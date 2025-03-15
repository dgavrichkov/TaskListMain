import { useEffect, useState } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { verbModel } from '../../entities/verb';

import styles from './Verbs.module.scss';
import { VerbCard } from './ui/VerbCard';

export const Verbs = () => {
  const dispatch = useAppDispatch();
  const wordsmap = useAppSelector(verbModel.selectors.selectWordsMap);
  const words = useAppSelector(verbModel.selectors.selectWordsList);
  const phrasals = useAppSelector(verbModel.selectors.selectPhrasals);

  const [wordFilter, setWordFilter] = useState('');
  const [phrasalFilter, setPhrasalFilter] = useState('');

  const filteredWords = wordFilter
    ? words.filter((word) => word.label.includes(wordFilter))
    : words;

  const filteredPhrasals = phrasalFilter
    ? phrasals.filter((phrasal) => phrasal.words.includes(phrasalFilter))
    : phrasals;

  useEffect(() => {
    // TODO - разобраться с AnyAction
    dispatch<any>(verbModel.actions.getWordReference());
    dispatch<any>(verbModel.actions.getPhrasalVerbsReference());
  }, [dispatch]);

  const handleFilterWords = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setWordFilter(event.target.value);
  };

  const handleFilterPhrasals = (wordId: string) => {
    if (phrasalFilter === wordId) {
      setPhrasalFilter('');
      return;
    } else {
      setPhrasalFilter(wordId);
    }
  };

  return (
    <section className={styles.wrap}>
      <h1 className={styles.title}>Verbs</h1>
      <section className={styles.words}>
        <h2>Words for phrasal verbs</h2>
        <div>
          <input placeholder="Search word" type="text" onChange={handleFilterWords} />
        </div>
        <div>
          Active filter: <span>{wordsmap[phrasalFilter]?.label || 'Нет'}</span>
        </div>
        <ul className={styles.wordsList}>
          {filteredWords.map((word) => (
            <li className={styles.word} key={word.id}>
              <button
                className={cn(styles.wordButton, { [styles.active]: phrasalFilter === word.id })}
                title={`id: ${word.id}`}
                onClick={() => handleFilterPhrasals(word.id)}
              >
                {word.label}
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.phrasals}>
        <h2>Phrasal verbs list</h2>
        {filteredPhrasals && filteredPhrasals.length ? (
          <ul className={styles.phrasalsList}>
            {filteredPhrasals.map((phrasals) => (
              <li key={phrasals.id}>
                <VerbCard item={phrasals} wordsmap={wordsmap} />
              </li>
            ))}
          </ul>
        ) : (
          'No phrasal verbs'
        )}
      </section>
    </section>
  );
};
