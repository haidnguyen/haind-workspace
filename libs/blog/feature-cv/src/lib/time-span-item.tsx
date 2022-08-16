import { AtSignIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, ChakraProps, Flex, Text, VStack } from '@chakra-ui/react';

export interface TimeSpanItemProps {
  lineColor: ChakraProps['borderColor'];
  bulletColor: ChakraProps['bgColor'];
  organization: string;
  period: string;
  title: string;
  tech: string;
  description: string;
  url: string;
  company: string;
  jobTitle: string;
  minimize?: boolean;
}

export function TimeSpanItem({
  lineColor,
  bulletColor,
  organization,
  title,
  period,
  tech,
  description,
  url,
  company,
  jobTitle,
  minimize = false,
}: TimeSpanItemProps) {
  return (
    <Flex>
      <VStack
        pos='relative'
        w='25%'
        flexShrink={0}
        spacing={1}
        align='stretch'
        _after={{
          pos: 'absolute',
          w: '100%',
          h: 'calc(100% + .25rem)',
          top: '16px',
          left: 0,
          borderRight: '1px solid',
          borderColor: lineColor,
          content: '""',
        }}
      >
        <Text color='gray.600' fontSize='sm' pos='relative'>
          {organization}
          {minimize && (
            <Text color='gray.600' fontSize='sm' as='span'>
              &nbsp; - {jobTitle.split(' ').map(word => word[0])}
            </Text>
          )}

          <Box pos='absolute' borderRadius='full' w={1} h={1} bg={bulletColor} right='-2px' top='8px'>
            &nbsp;
          </Box>
          <Box
            pos='absolute'
            w={3}
            h={3}
            borderRadius='full'
            border='1px solid'
            borderColor={bulletColor}
            top='4px'
            right='-.375rem'
          >
            &nbsp;
          </Box>
        </Text>
        <Text color='gray.500' fontSize='xs'>
          {period}
        </Text>
        {!minimize && (
          <Text color='gray.600' fontSize='xs'>
            {jobTitle}
          </Text>
        )}
        <Text color='gray.600' fontSize='xs' display='flex' alignItems='center'>
          <AtSignIcon boxSize={3} mr={1} color='pink.400' />
          {company}
        </Text>
      </VStack>
      <Flex grow={1} px={4} direction='column' w='full'>
        <Text color='gray.600'>{title}</Text>
        <Text color='gray.500' fontSize='xs' mt={1}>
          {tech}
        </Text>
        {!minimize && (
          <>
            <Text fontSize='sm' color='gray.600' mt={1}>
              {description}
            </Text>
            <Flex pos='relative' mt='2px'>
              <Text color='gray.600' fontSize='xs'>
                Ho Chi Minh City, Vietnam
              </Text>

              <Flex pos='absolute' ml='65%' align='center'>
                <ExternalLinkIcon color='pink.600' mr={1} />
                <Text as='a' href={`https://${url}`} target='__blank' fontSize='xs' color='pink.600'>
                  {url}
                </Text>
              </Flex>
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  );
}
