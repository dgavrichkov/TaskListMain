import { useEffect, useState } from 'react';
import cn from 'classnames';
import { useAppDispatch } from '../../app/store';
import { verbModel } from '../../entities/verb';
import { VerbAdmin } from './ui/VerbAdmin';
import { VerbList } from './ui/VerbList';

import styles from './Verbs.module.scss';

const TAB_MAP = {
  verbs: <VerbList />,
  admin: <VerbAdmin />,
};

export const Verbs = () => {
  const dispatch = useAppDispatch();
  const [tabItem, setTabItem] = useState<'verbs' | 'admin'>('verbs');

  useEffect(() => {
    // TODO - разобраться с AnyAction
    dispatch<any>(verbModel.actions.getWordReference());
    dispatch<any>(verbModel.actions.getPhrasalVerbsReference());
  }, [dispatch]);

  return (
    <section className={styles.wrap}>
      <header>
        <button
          className={cn(styles.tabItem, { [styles.active]: tabItem === 'verbs' })}
          onClick={() => setTabItem('verbs')}
        >
          Verbs
        </button>
        <button
          className={cn(styles.tabItem, { [styles.active]: tabItem === 'admin' })}
          onClick={() => setTabItem('admin')}
        >
          Admin
        </button>
      </header>
      {TAB_MAP[tabItem]}
    </section>
  );
};
