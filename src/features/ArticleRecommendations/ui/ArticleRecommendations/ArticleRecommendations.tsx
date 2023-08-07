import { FC, memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import s from './ArticleRecommendations.module.scss';
import { useArticleRecommendations } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsProps {
  className?: string;
}

export const ArticleRecommendations: FC<ArticleRecommendationsProps> = memo(
  (props: ArticleRecommendationsProps) => {
    const { className } = props;
    const { isLoading, data: recommendations, error } = useArticleRecommendations(3);
    // console.log('data: ', recommendations);

    const { t } = useTranslation('articles');

    if (isLoading || error || !recommendations) {
      return null;
    }

    return (
      <VStack gap={8} className={className}>
        <Text size="size_l" className={s.ArticleRecommendations} title={t('recommend')} />
        <ArticleList
          className={s.recommendationsList}
          articles={recommendations}
          isLoading={isLoading}
          target="_blank"
          virtualized={false}
        />
      </VStack>
    );
  },
);
