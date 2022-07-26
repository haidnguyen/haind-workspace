import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  useDisclosure,
} from '@chakra-ui/react';
import { useTitle } from '@haind-workspace/blog/data-title';
import { PropsWithChildren } from 'react';
import { Footer } from './footer';
import { Header } from './header';
import { NavigationMenu, NavigationMenuProps } from './navigation-menu';

const routes: NavigationMenuProps['routes'] = [
  { emoji: '🏠', path: '/', label: 'Home' },
  { emoji: '🔍', path: '/about', label: 'About' },
];

export function Layout({ children }: PropsWithChildren) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { title } = useTitle();

  return (
    <>
      <Box as='header'>
        <Header onMenuClick={onOpen} />
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton top={4} />
          <DrawerHeader p={4}>{title}</DrawerHeader>
          <DrawerBody p={4}>
            <NavigationMenu routes={routes} onLinkClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Grid as='section' p={[0, 2]} pt={[4, 2]} gap={4} templateColumns='repeat(10, 1fr)'>
        <GridItem as='nav' colSpan={[0, 3]} display={['none', 'initial']}>
          sidebar
        </GridItem>
        <GridItem colSpan={[10, 7]}>{children}</GridItem>
      </Grid>

      <Box as='footer'>
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
