export type MenuAPI = { onClose: () => void };

export type MenuRenderer = (api: MenuAPI) => React.ReactNode;

/** Компонент меню (если предпочитаете хранить компоненты) */
export type MenuComponent<P extends NonNullable<unknown>> = React.ComponentType<
  P & { api: MenuAPI }
>;
