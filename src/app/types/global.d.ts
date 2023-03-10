declare module '*.scss' {
  const classNames: Record<string, string>;
  export = classNames;
}

declare module '*.svg' {
  import { SVGProps, VFC } from 'react';

  const content: VFC<SVGProps<SVGSVGElement>>;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

// eslint-disable-next-line no-unused-vars
declare const __IS_DEV__: boolean;
declare const __API_URL__: string;
declare const __PROJECT__: 'project' | 'storybook' | 'jest';
