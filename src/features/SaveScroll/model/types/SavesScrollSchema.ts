// <Адрес страницы, позиция скролkа>
export type ScrollSchema = Record<string, number>

export interface SaveScrollSchema {
  scroll: ScrollSchema;
}
