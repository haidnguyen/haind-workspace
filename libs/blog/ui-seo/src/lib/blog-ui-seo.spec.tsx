import { render } from '@testing-library/react';

import BlogUiSeo from './blog-ui-seo';

describe('BlogUiSeo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogUiSeo />);
    expect(baseElement).toBeTruthy();
  });
});
