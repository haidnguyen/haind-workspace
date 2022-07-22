import { PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';

export function Layout({ children }: PropsWithChildren) {
  return (
    <Box maxW='36rem' p='0 1rem' m='3rem auto 6rem'>
      {children}
    </Box>
  );
}

export default Layout;
