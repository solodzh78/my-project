type Mods = Record<string, string | boolean>

export const classNames = (cls: string, mods: Mods, additional: string[]): string => [
    cls,
    ...Object.entries(mods)
      .filter(([classname, value]) => Boolean(value))
      .map(([classname, value]) => classname),
    ...additional
  ].join(' ')
