import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { verbModel } from '../../entities/verb';
import { TPhrasalVerb } from '../../entities/verb/model/interface';
import { loadPhrasalVerbs } from './api';

import styles from './Verbs.module.scss';

export const Verbs = () => {
  const dispatch = useAppDispatch();
  const words = useAppSelector((state) =>
    state.verb.wordReference.idList.map((id: string) => state.verb.wordReference.data[id]),
  );
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
      <h1>Verbs</h1>
      <section className={styles.container}>
        <h2>Words for phrasal verbs</h2>
        <ul>
          {words.map((word) => (
            <li className={styles.word} key={word.id}>
              {word.label}
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
