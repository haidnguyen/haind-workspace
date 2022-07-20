import { render } from '@testing-library/react';

import BlogFeatureHome from './blog-feature-home';

describe('BlogFeatureHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogFeatureHome />);
    expect(baseElement).toBeTruthy();
  });
});
