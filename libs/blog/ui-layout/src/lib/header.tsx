import { HamburgerIcon } from '@chakra-ui/icons';
import { HStack, IconButton, Text } from '@chakra-ui/react';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <HStack align='center' p={2} borderBottom='1px' borderColor='gray.200' spacing={2}>
      <IconButton
        border='none'
        borderRadius='0'
        bgColor='transparent'
        aria-label='Open navigation menu'
        icon={<HamburgerIcon />}
        onClick={onMenuClick}
      />
      <Text fontSize='xl' as='h1'>
        Higher-order Engineer
      </Text>
    </HStack>
  );
}
