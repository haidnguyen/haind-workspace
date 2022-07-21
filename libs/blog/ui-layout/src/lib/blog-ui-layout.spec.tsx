import { render } from '@testing-library/react';

import BlogUiLayout from './blog-ui-layout';

describe('BlogUiLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogUiLayout />);
    expect(baseElement).toBeTruthy();
  });
});
