import {
  FC, MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getSaveScrollByPath, saveScrollActions } from 'features/SaveScroll';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
// import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import s from './Page.module.scss';

interface PageProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = (props: PageProps) => {
  const { className, children, onScrollEnd } = props;
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

  // const onScrollHandler = useThrottle((e: UIEvent<HTMLElement>) => {
  //   console.log('scroll');
  //   // const event = e as unknown as Event;
  //   dispatch(saveScrollActions.setScrollPosition({
  //     path: pathname,
  //     position: e.target.scrollTop,
  //   }));
  // }, 500);

  const onScrollHandler = useDebounce((e: UIEvent<HTMLElement>) => {
    dispatch(saveScrollActions.setScrollPosition({
      path: pathname,
      // ts-ignore
      position: e.target.scrollTop,
    }));
  }, 500);

  return (
    <section
      ref={wrapperRef}
      className={classNames([s.Page, className])}
      onScroll={onScrollHandler}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
