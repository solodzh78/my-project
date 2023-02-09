type Mods = Record<string, string | boolean>

interface ClassNamesProps {
  cls: string[]; 
  mods?: Mods;
}

export const classNames = (cls: string[], mods: Mods = {}): string => [
    ...cls.filter(el => Boolean(el)),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(' ')
