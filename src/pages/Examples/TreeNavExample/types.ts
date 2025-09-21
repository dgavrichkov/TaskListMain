// компонент, который рендерит тело окна контекстного меню, получает коллбэк для закрытия поповера
export type CtxMenuBodyProps = {
  onClose: () => void;
};

export type MenuAPI = { onClose: () => void };
export type MenuRenderer = (api: MenuAPI) => React.ReactNode;
/** Компонент меню (если предпочитаете хранить компоненты) */
export type MenuComponent<P extends NonNullable<unknown>> = React.ComponentType<
  P & { api: MenuAPI }
>;
