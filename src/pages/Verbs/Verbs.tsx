import { useEffect, useState } from 'react';
import { loadPhrasalVerbs, loadWords } from './api';
import { TPharasalVerb, TWord } from './types';
import styles from './Verbs.module.scss';

export const Verbs = () => {
  const [words, setWords] = useState<TWord[]>([]);
  const [phrasals, setPhrasals] = useState<TPharasalVerb[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    loadWords(signal)
      .then((data) => {
        setWords(data);
      })
      .catch((error) => {
        console.error('Error in words loading', error);
      });

    loadPhrasalVerbs(signal)
      .then((data) => {
        setPhrasals(data);
      })
      .catch((error) => {
        console.error('Error in phrasal verbs loading', error);
      });

    return () => controller.abort();
  }, []);

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
