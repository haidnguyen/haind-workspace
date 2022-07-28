import { HamburgerIcon } from '@chakra-ui/icons';
import { Container, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { useTitle } from '@haind-workspace/blog/data-title';
import Image from 'next/image';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { title } = useTitle();

  return (
    <Container maxW={['full', 'container.xl']} px={[0, 4]}>
      <Flex justify='space-between' p={2}>
        <HStack spacing={4}>
          <Image src='/logo.png' width={40} height={40} alt='Logo' />
          <Text fontSize='xl' fontWeight='bold' display={['none', 'initial']}>
            {title}
          </Text>
        </HStack>

        <IconButton
          border='none'
          borderRadius='0'
          bgColor='transparent'
          aria-label='Open navigation menu'
          icon={<HamburgerIcon />}
          onClick={onMenuClick}
          display={['initial', 'none']}
        />
      </Flex>
    </Container>
  );
}
