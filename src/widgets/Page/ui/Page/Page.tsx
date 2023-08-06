import {
  DetailedHTMLProps,
  FC, HTMLAttributes, MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getSaveScrollByPath, saveScrollActions } from 'features/SaveScroll';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import s from './Page.module.scss';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
interface PageProps extends DivProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = (props: PageProps) => {
  const {
    className, children, onScrollEnd, ...otherProps
  } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getSaveScrollByPath(state, pathname));

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScrollHandler = useDebounce((e: UIEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    dispatch(saveScrollActions.setScrollPosition({
      path: pathname,
      position: target.scrollTop,
    }));
  }, 500);

  return (
    <main
      ref={wrapperRef}
      className={classNames([s.Page, className])}
      onScroll={onScrollHandler}
      id="page"
      {...otherProps}
    >
      {children}
      {onScrollEnd && <div ref={triggerRef} className={s.trigger} />}
    </main>
  );
};
