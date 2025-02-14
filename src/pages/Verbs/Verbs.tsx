import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { verbModel } from '../../entities/verb';
import { TPhrasalVerb } from '../../entities/verb/model/interface';
import { selectWordReference } from '../../entities/verb/model/selectors';
import { loadPhrasalVerbs } from './api';

import styles from './Verbs.module.scss';

export const Verbs = () => {
  const dispatch = useAppDispatch();
  const words = useAppSelector(selectWordReference);

  const [phrasals, setPhrasals] = useState<TPhrasalVerb[]>([]);

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

  return (
    <div>
      <h1 className={styles.title}>Verbs</h1>
      <section className={styles.container}>
        <h2>Words for phrasal verbs</h2>
        <ul className={styles.wordsList}>
          {words.map((word) => (
            <li className={styles.word} key={word.id}>
              <button className={styles.wordButton}>{word.label}</button>
            </li>
          ))}
        </ul>
        <h2>Pharasal verbs</h2>
        <ul className={styles.phrasalsList}>
          {phrasals.map((phrasals) => (
            <li className={styles.phrasal} key={phrasals.id}>
              <h2>{phrasals.meaning}</h2>
              <p>{phrasals.translation.ru}</p>
              <ul>
                {phrasals.examples.map((example, index) => (
                  <li key={index}>
                    <i>{example}</i>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
