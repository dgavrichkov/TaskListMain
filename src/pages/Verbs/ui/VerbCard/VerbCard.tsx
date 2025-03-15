import { TPhrasalVerb, TWord } from '../../../../entities/verb/model/interface';

import styles from './VerbCard.module.scss';

type Props = {
  item: TPhrasalVerb;
  wordsmap: Record<string, TWord>;
};

export const VerbCard = ({ item, wordsmap }: Props) => {
  return (
    <article className={styles.phrasal}>
      <h3>{item.words.map((word) => wordsmap[word].label).join(' ')}</h3>
      <p>{item.meaning}</p>
      <p>{item.translation.ru}</p>
      <ul className={styles.pharasalExamples}>
        {item.examples.map((example, index) => (
          <li key={index}>
            <i>{example}</i>
          </li>
        ))}
      </ul>
    </article>
  );
};
