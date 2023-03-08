import { VFC, SVGProps } from 'react';
import { RoutePaths } from 'shared/config/routes';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { ValueOf } from 'shared/types/ValueOf';

interface SideBarLinkType {
  name: string;
  path: ValueOf<typeof RoutePaths>;
  Icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SideBarLinks: SideBarLinkType[] = [
  {
    name: 'MAIN',
    path: RoutePaths.main,
    Icon: MainIcon,
  },
  {
    name: 'PROFILE',
    path: RoutePaths.profile,
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    name: 'ABOUT',
    path: RoutePaths.about,
    Icon: AboutIcon,
  },
];
