import { useEffect, useRef, useState } from 'react';

const STORAGE_KEY = 'pageTimerElapsedMs';

export const PageTimeCounterPersist = () => {
  /** только отображаемое состояние. */
  const [elapsedMs, setElapsedMs] = useState(() => {
    const saved = Number(localStorage.getItem(STORAGE_KEY));
    return Number.isFinite(saved) ? saved : 0;
  });

  /** хранит старт текущей активной видимой сессии. */
  const sessionStartRef = useRef<number | null>(null);
  /** хранит уже накопленное время за прошлые видимые сессии. */
  const baseElapsedRef = useRef<number>(elapsedMs);
  const intervalIdRef = useRef<number | null>(null);

  useEffect(() => {
    /** сохраняет указанное значение времени в localStorage */
    const persist = (value: number) => {
      localStorage.setItem(STORAGE_KEY, String(value));
    };

    const stopSession = () => {
      if (sessionStartRef.current === null) {
        return;
      }

      const sessionElapsed = Date.now() - sessionStartRef.current;
      const total = baseElapsedRef.current + sessionElapsed;

      baseElapsedRef.current = total;
      setElapsedMs(total);
      persist(total);

      sessionStartRef.current = null;
    };

    /** засетать новое состояние времени */
    const tick = () => {
      if (sessionStartRef.current === null) {
        return;
      }

      /** количество милисекунд со старта сессии */
      const sessionElapsed = Date.now() - sessionStartRef.current;
      setElapsedMs(baseElapsedRef.current + sessionElapsed);
    };

    const startSession = () => {
      if (sessionStartRef.current !== null) {
        return;
      }

      sessionStartRef.current = Date.now();
      tick();

      // запускаем запись стейта по интервалу
      intervalIdRef.current = window.setInterval(() => {
        tick();
      }, 1000);
    };

    /** удаление интервала и обнуление его рефа */
    const clearTicker = () => {
      if (intervalIdRef.current !== null) {
        window.clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };

    /** Остановить сессию + очистить счетчик */
    const pause = () => {
      // при стопе сессии время будет сохранено в LS
      stopSession();
      clearTicker();
    };

    /** Когда возобновляется видимость вкладки, возобновляем счетчик */
    const resume = () => {
      if (document.visibilityState === 'visible') {
        startSession();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        pause();
      } else {
        resume();
      }
    };

    /** чтобы сохранить данные при закрытии/уходе со страницы */
    const handlePageHide = () => {
      pause();
    };

    resume();

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);

    return () => {
      pause();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, []);

  return (
    <div>
      <h1>Счетчик секунд</h1>
      <p>Вы находитесь на этой странице: {Math.floor(elapsedMs / 1000)} секунд</p>
    </div>
  );
};
