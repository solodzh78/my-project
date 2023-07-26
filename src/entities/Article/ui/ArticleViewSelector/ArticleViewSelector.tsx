import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import GridIcon from 'shared/assets/icons/grid-24-24.svg';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleView, VIEW } from '../../model/types/article';
import s from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: VIEW.LIST,
    icon: ListIcon,
  },
  {
    view: VIEW.GRID,
    icon: GridIcon,
  },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
  (props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onButtonClick = (newView: ArticleView) => () => {
      onViewClick?.(newView);
    };

    return (
      <div className={classNames([s.articleViewSelector, className])}>
        {viewTypes.map((viewType) => (
          <Button
            key={viewType.view}
            theme="clear"
            className={s.button}
            onClick={onButtonClick(viewType.view)}
          >
            <Icon
              className={classNames([s.icon], { [s.notSelected]: viewType.view !== view })}
              Svg={viewType.icon}
            />
          </Button>
        ))}
      </div>
    );
  },
);
