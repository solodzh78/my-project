import { RoutePaths } from 'shared/config/routes';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        name: 'MAIN',
        path: RoutePaths.main,
        Icon: MainIcon,
      },
      {
        name: 'ABOUT',
        path: RoutePaths.about,
        Icon: AboutIcon,
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          name: 'PROFILE',
          path: RoutePaths.profile + userData.id,
          Icon: ProfileIcon,
          authOnly: true,
        },
        {
          name: 'ARTICLES',
          path: RoutePaths.articles,
          Icon: ArticleIcon,
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
