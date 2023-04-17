import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import DefaultAvatarIcon from '../../assets/icons/user_icon.svg';
import s from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  alt?: string;
  src?: string;
  size?: number
}

export const Avatar: FC<AvatarProps> = (props) => {
  const {
    className,
    src,
    alt = 'Avatar Icon',
    size,
  } = props;

  const style = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  if (!src) {
    return (
      <DefaultAvatarIcon style={style} />
    );
  }

  return (
    <img
      className={classNames([s.Avatar, className])}
      src={src}
      alt={alt}
      style={style}
    />
  );
};
