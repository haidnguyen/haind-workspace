import { VStack, Link as ChLink, Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';

export interface NavigationMenuProps {
  onLinkClick: () => void;
  routes: Array<{ emoji: string; path: string; label: string }>;
}

export function NavigationMenu({ onLinkClick, routes }: NavigationMenuProps) {
  return (
    <VStack spacing={[3, 1]} align='stretch' as='ul'>
      {routes.map(({ emoji, path, label }) => (
        <Flex
          key={path}
          as='li'
          listStyleType='none'
          onClick={onLinkClick}
          p={1.5}
          borderRadius={4}
          px={3}
          align='center'
          _hover={{
            bgColor: {
              sm: 'red.100',
            },
          }}
        >
          <Box as='span' role='img' mr={4} fontSize='xl'>
            {emoji}
          </Box>
          <Link href={path}>
            <ChLink w='100%'>{label}</ChLink>
          </Link>
        </Flex>
      ))}
    </VStack>
  );
}
