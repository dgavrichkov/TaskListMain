/* eslint-disable react/no-unescaped-entities */
import { Button } from '@/shared/ui';
import React, { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';

type ServerToClientEvents = {
  events: (data: unknown) => void;
  exception: (data: unknown) => void;
};

type ClientToServerEvents = {
  events: (payload: { test: string }) => void;
  identity: (id: number, cb: (response: unknown) => void) => void;
  message: (payload: any, cb: (resp: any) => void) => void;
};

export const TrySocket = () => {
  const socketRef = useRef<Socket<ServerToClientEvents, ClientToServerEvents> | null>(null);
  const [connected, setConnected] = useState(false);
  const [log, setLog] = useState<string[]>([]);
  const [identityResp, setIdentityResp] = useState<unknown>(null);

  useEffect(() => {
    const socket = io('http://localhost:3000', {
      // при желании включите только websocket:
      transports: ['websocket'],
      // если у вас namespace в Nest: io("http://localhost:3000/chat")
      // если у вас нестандартный путь: path: "/socket.io"
    }) as Socket<ServerToClientEvents, ClientToServerEvents>;

    socketRef.current = socket;

    const add = (line: string) => setLog((prev) => [line, ...prev].slice(0, 200));

    socket.on('connect', () => {
      setConnected(true);
      add('✅ Connected');
      // Повторяем пример из доки:
      socket.emit('events', { test: 'test' });
      socket.emit('identity', 14, (response) => {
        add(`Identity: ${JSON.stringify(response)}`);
        setIdentityResp(response);
      });
    });

    socket.on('events', (data) => add(`events → ${JSON.stringify(data)}`));
    socket.on('exception', (data) => add(`exception → ${JSON.stringify(data)}`));
    socket.on('disconnect', () => {
      setConnected(false);
      add('⛔ Disconnected');
    });

    return () => {
      socket.off(); // снять все слушатели
      socket.close(); // закрыть соединение
    };
  }, []);

  const emitEvents = () => socketRef.current?.emit('events', { test: 'test' });
  const emitIdentity = () =>
    socketRef.current?.emit('identity', 0, (response) => setIdentityResp(response));

  const handleBtn = () => {
    return socketRef.current?.emit('message', undefined, (resp) => {
      console.log('ACK from server:', resp);
    });
  };

  return (
    <div style={{ fontFamily: 'system-ui', padding: 16, display: 'grid', gap: 12 }}>
      <h3 className="font-bold">Try Web Socket with socket.io to Nest</h3>
      <div>Статус: {connected ? '🟢 подключено' : '🔴 нет соединения'}</div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button onClick={emitEvents}>emit("events", {"{ test: 'test' }"})</Button>
        <Button onClick={emitIdentity}>emit("identity", 0, cb)</Button>
        <Button onClick={handleBtn}>emit message</Button>
      </div>

      <div>
        <strong>identity response:</strong>{' '}
        <code>{identityResp !== null ? JSON.stringify(identityResp) : '—'}</code>
      </div>

      <div>
        <strong>Log (последние сверху):</strong>
        <pre
          style={{
            background: '#111',
            color: '#eee',
            padding: 12,
            maxHeight: 260,
            overflow: 'auto',
          }}
        >
          {log.join('\n')}
        </pre>
      </div>
    </div>
  );
};
