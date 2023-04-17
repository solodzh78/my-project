import { CSSProperties, FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  border?: string;
}

export const Skeleton: FC<SkeletonProps> = memo((props: SkeletonProps) => {
  const {
    className,
    width,
    height,
    border,
  } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      data-testid="Skeleton"
      className={classNames([s.Skeleton, className])}
      style={styles}
    />
  );
});
