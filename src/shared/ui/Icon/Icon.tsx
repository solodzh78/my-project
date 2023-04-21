import {
  FC, memo, SVGProps, VFC,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: VFC<SVGProps<SVGSVGElement>>;
}

export const Icon: FC<IconProps> = memo((props: IconProps) => {
  const { className, Svg } = props;

  return (
    <div
      className={classNames([s.Icon, className])}
    >
      <Svg />
    </div>
  );
});
