import { render } from '@testing-library/react';

import BlogUiDate from './blog-ui-date';

describe('BlogUiDate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogUiDate />);
    expect(baseElement).toBeTruthy();
  });
});
