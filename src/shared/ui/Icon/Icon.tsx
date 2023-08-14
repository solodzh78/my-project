import {
  FC, memo, SVGProps,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon: FC<IconProps> = memo((props: IconProps) => {
  const { className, Svg, inverted } = props;

  return (
    <div
      className={classNames([inverted ? s.invertedIcon : s.Icon, className])}
    >
      <Svg />
    </div>
  );
});
