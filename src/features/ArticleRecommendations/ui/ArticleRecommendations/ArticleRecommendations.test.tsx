import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/ComponentRender';
import { ArticleRecommendations } from './ArticleRecommendations';

describe('ArticleRecommendations', () => {
  test('render', () => {
    ComponentRender(<ArticleRecommendations />);
    expect(screen.getByTestId('ArticleRecommendations')).toBeInTheDocument();
  });
});
