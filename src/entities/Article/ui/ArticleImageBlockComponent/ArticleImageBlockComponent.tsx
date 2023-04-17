import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import s from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div
        data-testid="ArticleImageBlockComponent"
        className={classNames([s.ArticleImageBlockComponent, className])}
      >
        <img src={block.src} alt={block.title} className={s.img} />
      </div>
    );
  },
);
