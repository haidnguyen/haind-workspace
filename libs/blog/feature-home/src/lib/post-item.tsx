import { Box, HStack, Text } from '@chakra-ui/react';
import { PostData } from '@haind-workspace/blog/data-posts';
import { UiDate } from '@haind-workspace/blog/ui-date';
import { Link as CLink } from '@chakra-ui/react';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { useIntl } from 'react-intl';

export function PostItem({ title, date, tags, id }: PropsWithChildren<PostData>) {
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
      <Link href={`/posts/${id}`}>
        <CLink fontWeight='bold' fontSize='xl'>
          {title}
        </CLink>
      </Link>

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
