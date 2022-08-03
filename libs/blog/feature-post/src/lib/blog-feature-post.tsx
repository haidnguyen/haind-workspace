import { Text } from '@chakra-ui/react';
import { PostDetail } from '@haind-workspace/blog/data-posts';
import { useTitle } from '@haind-workspace/blog/data-title';
import { Layout } from '@haind-workspace/blog/ui-layout';
import Head from 'next/head';
import { FormattedMessage } from 'react-intl';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

export interface BlogFeaturePostProps {
  postData: PostDetail;
}

export function BlogFeaturePost({ postData }: BlogFeaturePostProps) {
  const { title } = useTitle();

  return (
    <Layout>
      <Head>
        <title>
          {postData.title} | {title}
        </title>
      </Head>
      <Text as='h1' fontSize={['3xl', '5xl']} fontWeight='bold' mb={2} textAlign='center'>
        {postData.title}
      </Text>
      <FormattedMessage id='posted on' values={{ ts: new Date(postData.date) }}>
        {txt => (
          <Text fontSize={['sm', 'md']} fontWeight='light' mb={4}>
            {txt}
          </Text>
        )}
      </FormattedMessage>

      <ReactMarkdown
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                style={okaidia as any}
                PreTag='div'
                {...props}
              />
            ) : (
              <Text
                className={className}
                {...props}
                as='code'
                borderRadius='md'
                bgColor='gray.200'
                px={2}
                py={1}
                fontWeight='semibold'
              >
                {children}
              </Text>
            );
          },
          p: ({ children }) => (
            <Text fontSize='lg' lineHeight='7' mb={3}>
              {children}
            </Text>
          ),
          strong: ({ children }) => (
            <Text fontSize='lg' fontWeight='bold' as='strong'>
              {children}
            </Text>
          ),
          h2: ({ children }) => (
            <Text fontSize='2xl' fontWeight='bold' as='h2' mb={2}>
              {children}
            </Text>
          ),
        }}
      >
        {postData.content}
      </ReactMarkdown>
    </Layout>
  );
}

export default BlogFeaturePost;
