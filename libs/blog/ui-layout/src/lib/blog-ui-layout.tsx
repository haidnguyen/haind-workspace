import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export function BlogUiLayout({ children }: PropsWithChildren) {
  // return <div>{children}</div>
  return (
    <Box maxW='36rem' p='0 1rem' m='3rem auto 6rem'>
      {children}
    </Box>
  );
}

export default BlogUiLayout;
