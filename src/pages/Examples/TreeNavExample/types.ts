/** api, предоставляемый поповером своим потомкам */
export type TPopoverAPI = { onClose: () => void };

/** функция рендера контента поповера */
export type TPopoverContentRenderer = (api: TPopoverAPI) => React.ReactNode;
