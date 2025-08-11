// Типы блоков
type TextData = string;

type ImageData = {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  caption?: string; // или captionBlocks?: string[] ids на детей
};

type PageLinkData = {
  pageId: string; // ссылка на другой документ/страницу
  title?: string;
};

type CalloutData = {
  icon?: string; // '💡' или 'info'|'warn'|'error'
  color?: 'gray' | 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'pink' | 'orange';
  text?: string; // минимально — текст
  // можно разрешить children для сложных callout
};

type ListData = {
  style: 'bulleted' | 'numbered' | 'todo';
  // сами элементы — это listItem-дочерние блоки
};

type ListItemData = {
  text: string;
  checked?: boolean; // для todo
};

type QuoteData = {
  text: string;
  cite?: string;
};

type CodeData = {
  language?: string; // 'ts','js','bash',...
  code: string;
};

type DividerData = Record<string, never>;

export type BlockDataMap = {
  text: TextData;
  image: ImageData;
  pageLink: PageLinkData;
  callout: CalloutData;
  list: ListData;
  listItem: ListItemData;
  quote: QuoteData;
  code: CodeData;
  divider: DividerData;
};
