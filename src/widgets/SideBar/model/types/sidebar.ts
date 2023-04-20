import { VFC, SVGProps } from 'react';
import { RoutePaths } from 'shared/config/routes';
import { ValueOf } from 'shared/types/ValueOf';

export interface SidebarItemType {
  name: string;
  path: ValueOf<typeof RoutePaths>;
  Icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}
