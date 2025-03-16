import { useState } from 'react';
import cn from 'classnames';
import { useAppSelector } from '../../../../app/store';
import { VerbCard } from '../VerbCard';
import styles from './VerbList.module.scss';
import { verbModel } from '../../../../entities/verb';

export const VerbList = () => {
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

  const handleFilterWords = (event: React.ChangeEvent<HTMLInputElement>) => {
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
