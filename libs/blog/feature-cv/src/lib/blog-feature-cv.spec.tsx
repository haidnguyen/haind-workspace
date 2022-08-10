import { render } from '@testing-library/react';

import BlogFeatureCv from './blog-feature-cv';

describe('BlogFeatureCv', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogFeatureCv />);
    expect(baseElement).toBeTruthy();
  });
});
