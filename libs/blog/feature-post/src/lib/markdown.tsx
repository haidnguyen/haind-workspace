import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Text } from '@chakra-ui/react';
import { synthwave84 } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      components={{
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              language={match[1]}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              style={synthwave84 as any}
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
      {content}
    </ReactMarkdown>
  );
}
