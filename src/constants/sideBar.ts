import bookmarksOutline from '@assets/icons/outline/bookmarks.svg';
import exploreOutline from '@assets/icons/outline/explore.svg';
import homeOutline from '@assets/icons/outline/home.svg';
import listsOutline from '@assets/icons/outline/lists.svg';
import messagesOutline from '@assets/icons/outline/messages.svg';
import moreOutline from '@assets/icons/outline/more.svg';
import notificationOutline from '@assets/icons/outline/notification.svg';
import profileOutline from '@assets/icons/outline/profile.svg';
import bookmarksFill from '@assets/icons/fill/bookmarks.svg';
import exploreFill from '@assets/icons/fill/explore.svg';
import homeFill from '@assets/icons/fill/home.svg';
import listsFill from '@assets/icons/fill/lists.svg';
import messagesFill from '@assets/icons/fill/messages.svg';
import moreFill from '@assets/icons/fill/more.svg';
import notificationFill from '@assets/icons/fill/notifications.svg';
import profileFill from '@assets/icons/fill/profile.svg';

import { ROUTES } from './index';

export const APP_LINKS = [
  {
    name: 'Home',
    path: ROUTES.HOME,
    outlineIcon: homeOutline,
    fillIcon: homeFill,
  },
  {
    name: 'Explore',
    path: ROUTES.EXPLORE,
    outlineIcon: exploreOutline,
    fillIcon: exploreFill,
  },
  {
    name: 'Notifications',
    path: ROUTES.NOTIFICATIONS,
    outlineIcon: notificationOutline,
    fillIcon: notificationFill,
  },
  {
    name: 'Messages',
    path: ROUTES.MESSAGES,
    outlineIcon: messagesOutline,
    fillIcon: messagesFill,
  },
  {
    name: 'Bookmarks',
    path: ROUTES.BOOKMARKS,
    outlineIcon: bookmarksOutline,
    fillIcon: bookmarksFill,
  },
  {
    name: 'Lists',
    path: ROUTES.LISTS,
    outlineIcon: listsOutline,
    fillIcon: listsFill,
  },
  {
    name: 'Profile',
    path: ROUTES.PROFILE,
    outlineIcon: profileOutline,
    fillIcon: profileFill,
  },
  {
    name: 'More',
    path: ROUTES.MORE,
    outlineIcon: moreOutline,
    fillIcon: moreFill,
  },
] as const;
