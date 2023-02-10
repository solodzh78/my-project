declare module '*.scss' {
  const classNames: Record<string, string>;
  export = classNames;
}

declare module '*.svg' {
  // eslint-disable-next-line no-undef
  const content: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;
