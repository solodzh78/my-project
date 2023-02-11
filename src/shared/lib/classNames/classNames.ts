type Mods = Record<string, string | boolean>

export const classNames = (cls: string[], mods: Mods = {}): string => [
  ...cls.filter((el) => Boolean(el)),
  ...Object.entries(mods)
    // eslint-disable-next-line no-unused-vars
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className),
].join(' ');
