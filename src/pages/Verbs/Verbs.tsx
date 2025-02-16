import { useEffect, useState } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { verbModel } from '../../entities/verb';
import { TPhrasalVerb } from '../../entities/verb/model/interface';
import { selectWordsList, selectWordsMap } from '../../entities/verb/model/selectors';
import { loadPhrasalVerbs } from './api';

import styles from './Verbs.module.scss';

export const Verbs = () => {
  const dispatch = useAppDispatch();
  const wordsmap = useAppSelector(selectWordsMap);
  const words = useAppSelector(selectWordsList);

  const [phrasals, setPhrasals] = useState<TPhrasalVerb[]>([]);
  const [wordFilter, setWordFilter] = useState('');
  const [phrasalFilter, setPhrasalFilter] = useState('');

  const filteredWords = wordFilter
    ? words.filter((word) => word.label.includes(wordFilter))
    : words;

  const filteredPhrasals = phrasalFilter
    ? phrasals.filter((phrasal) => phrasal.words.includes(phrasalFilter))
    : phrasals;

  useEffect(() => {
    dispatch<any>(verbModel.actions.getWordReference());

    const controller = new AbortController();
    const { signal } = controller;

    loadPhrasalVerbs(signal)
      .then((data) => {
        setPhrasals(data);
      })
      .catch((error) => {
        console.error('Error in phrasal verbs loading', error);
      });

    return () => controller.abort();
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

  console.log(filteredPhrasals);

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
              <li className={styles.phrasal} key={phrasals.id}>
                <h3>{phrasals.words.map((word) => wordsmap[word].label).join(' ')}</h3>
                <p>{phrasals.meaning}</p>
                <p>{phrasals.translation.ru}</p>
                <ul className={styles.pharasalExamples}>
                  {phrasals.examples.map((example, index) => (
                    <li key={index}>
                      <i>{example}</i>
                    </li>
                  ))}
                </ul>
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
