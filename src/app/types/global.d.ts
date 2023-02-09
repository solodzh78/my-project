declare module '*.scss' {
  const classNames: Record<string, string>;
  export = classNames;
}

declare module "*.svg" {
  const content: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;