import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
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
  return (
    <>
      <Box as='header'>
        <Header onMenuClick={onOpen} />
      </Box>
      <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton top={4} />
          <DrawerHeader p={4}>Higher-order Engineer</DrawerHeader>
          <DrawerBody p={4}>
            <NavigationMenu routes={routes} onLinkClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Box>{children}</Box>

      <Box as='footer'>
        <Footer />
      </Box>
    </>
  );
}

export default Layout;
