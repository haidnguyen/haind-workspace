import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
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
      <Box
        as='header'
        borderBottom='1px'
        borderColor='gray.200'
        bgColor='white'
        position='fixed'
        w='100%'
        h='56px'
        zIndex='1'
      >
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

      <Box py={4} px={[0, 4]} position='relative' top='56px' bgColor='blackAlpha.100' maxW='100%'>
        <Container maxW={['full', 'container.xl']}>
          <Grid as='section' gap={4} templateColumns='repeat(10, 1fr)' minHeight='100vh'>
            <GridItem as='nav' colSpan={[0, 2]} display={['none', 'initial']}>
              <NavigationMenu routes={routes} onLinkClick={onClose} />
            </GridItem>
            <GridItem colSpan={[10, 8]}>{children}</GridItem>
          </Grid>
        </Container>
      </Box>

      <Box as='footer' display='none'>
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
