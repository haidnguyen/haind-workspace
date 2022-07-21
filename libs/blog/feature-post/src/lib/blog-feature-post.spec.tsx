import { render } from '@testing-library/react';

import BlogFeaturePost from './blog-feature-post';

describe('BlogFeaturePost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogFeaturePost />);
    expect(baseElement).toBeTruthy();
  });
});
