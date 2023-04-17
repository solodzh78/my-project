import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import s from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t } = useTranslation();

    return (
      <div
        data-testid="ArticleTextBlockComponent"
        className={classNames([s.ArticleTextBlockComponent, className])}
      >
        {block.title && <Text title={block.title} className={s.title} />}
        {
          block.paragraphs.map((paragraph, index) => (
            <Text
            // eslint-disable-next-line react/no-array-index-key
              key={index}
              text={paragraph}
              className={s.paragraph}
            />
          ))
        }

      </div>
    );
  },
);
