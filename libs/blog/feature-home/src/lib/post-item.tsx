import { Box, Flex, HStack, Link as CLink, Tag, Text } from '@chakra-ui/react';
import { PostData } from '@haind-workspace/blog/data-posts';
import { UiDate } from '@haind-workspace/blog/ui-date';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { useIntl } from 'react-intl';

export function PostItem({ title, date, tags, id, langs }: PropsWithChildren<PostData>) {
  const { locale } = useIntl();

  return (
    <Box
      as='li'
      listStyleType='none'
      bgColor='white'
      p={4}
      pt={2}
      mb={3}
      borderRadius={8}
      borderColor='gray.200'
      borderStyle='solid'
      borderWidth={['none', '1px']}
      transition='border-color 200ms linear'
      _hover={{
        borderColor: 'red.200',
      }}
    >
      <Flex justify='space-between'>
        <Link href={`/posts/${id}`}>
          <CLink fontWeight='bold' fontSize='xl'>
            {title}
          </CLink>
        </Link>
        <HStack spacing={2}>
          {langs?.map(lang => (
            <Link href={`/posts/${id}`} locale={lang}>
              <Tag key={lang} colorScheme='red'>
                <CLink>{lang.toUpperCase()}</CLink>
              </Tag>
            </Link>
          ))}
        </HStack>
      </Flex>

      <Text fontSize='small' mt={1}>
        <UiDate dateString={date} locale={locale} />
      </Text>

      <HStack spacing={4} mt={2}>
        {tags.map(tag => (
          <Text key={tag} fontSize='small' as='span'>
            #{tag}
          </Text>
        ))}
      </HStack>
    </Box>
  );
}
