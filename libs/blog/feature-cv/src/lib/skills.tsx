import { Flex, Tag, Text } from '@chakra-ui/react';
export interface SkillsProps {
  items: string[];
}

export function Skills({ items }: SkillsProps) {
  return (
    <Flex wrap='wrap'>
      {items.map(item => (
        <Tag mr={1} ml={0} mt={2} variant='solid' borderRadius='full' colorScheme='whiteAlpha' key={item}>
          <Text fontSize='xs'>{item}</Text>
        </Tag>
      ))}
    </Flex>
  );
}
