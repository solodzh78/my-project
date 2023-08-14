import { DropDirection } from '../../../types/ui';
import s from './popup.module.scss';

export const mappedClassesPopupDirection: Record<DropDirection, string> = {
  up_right: s.optionsUpRight,
  down_right: s.optionsDownRight,
  up_left: s.optionsUpLeft,
  down_left: s.optionsDownLeft,
};
