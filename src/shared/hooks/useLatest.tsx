import { useLayoutEffect, useRef } from 'react';

/** хелпер, который помогает сохранить некое значение в рефе и его обновлять. */
export function useLatest<T>(value: T) {
  const ref = useRef(value);

  // более безопасный для работы в конкурентном режиме вариант.
  // Обновление рефа произойдет, если дело дойдет до рендера вообще. Пкм, я это так понимаю.
  useLayoutEffect(() => {
    ref.current = value;
  });

  return ref;
}
