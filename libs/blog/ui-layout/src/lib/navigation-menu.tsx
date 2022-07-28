import { VStack, Link as ChLink, Box } from '@chakra-ui/react';
import Link from 'next/link';

export interface NavigationMenuProps {
  onLinkClick: () => void;
  routes: Array<{ emoji: string; path: string; label: string }>;
}

export function NavigationMenu({ onLinkClick, routes }: NavigationMenuProps) {
  return (
    <VStack spacing={[3, 1]} align='stretch' as='ul'>
      {routes.map(({ emoji, path, label }) => (
        <ChLink key={path} as='li' listStyleType='none' onClick={onLinkClick} p={1}>
          <Box as='span' role='img' mr={2} fontSize='xl'>
            {emoji}
          </Box>
          <Link href={path}>{label}</Link>
        </ChLink>
      ))}
    </VStack>
  );
}
