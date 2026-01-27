import type { Socket } from 'socket.io-client';

/**
 * Ожидает once и возвращает его payload, не дольше указанного таймаута
 * socket - экземпляр socket.io
 * event - имя события
 * ms - величина задержки до отмены слушателя
 * signal - сигнал от AbortController-а
 */
export const onceWithTimeout = <T = any>(
  socket: Socket,
  event: string,
  ms = 60_000,
  signal?: AbortSignal,
): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    // флаг завершенности ожидания
    let settled = false;

    // очистка и финальная операция
    const cleanup = (fn?: () => void) => {
      if (settled) {
        return;
      }

      settled = true;
      clearTimeout(timer);
      socket.off(event, onEvent);

      if (signal) {
        signal.removeEventListener('abort', onAbort);
      }

      if (fn) {
        fn();
      }
    };

    const onEvent = (payload: T) => {
      return cleanup(() => resolve(payload));
    };

    const onAbort = () => cleanup(() => reject(new DOMException('Aborted', 'AbortError')));

    // заводим таймер, по истечению времени все отменяем.
    const timer = setTimeout(
      () => cleanup(() => reject(new Error(`Timeout waiting: ${event}`))),
      ms,
    );

    // единоразово слушаем событие
    socket.once(event, onEvent);

    if (signal) {
      // если отмена уже была вызвана до входа в функцию
      if (signal.aborted) {
        return onAbort();
      }
      signal.addEventListener('abort', onAbort, { once: true });
    }
  });
};

/** Хелпер для промисификации socket.emit */
export const emitWithResponse = <Req, Res>(
  socket: Socket,
  event: string,
  data: Req,
  timeoutMs = 60_000,
): Promise<Res> => {
  return new Promise<Res>((resolve, reject) => {
    socket.timeout(timeoutMs).emit(event, data, (err: unknown, res: Res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};
