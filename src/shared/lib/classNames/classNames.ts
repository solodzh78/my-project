export type Mods = Record<string, boolean | undefined>

export const classNames = (cls: (string | undefined)[], mods: Mods = {}): string => [
  ...cls.filter((el) => Boolean(el)),
  ...Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([className]) => className),
].join(' ');
