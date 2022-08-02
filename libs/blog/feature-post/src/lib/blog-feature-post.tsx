import { PostDetail } from '@haind-workspace/blog/data-posts';
import { useTitle } from '@haind-workspace/blog/data-title';
import { Date } from '@haind-workspace/blog/ui-date';
import { Layout } from '@haind-workspace/blog/ui-layout';
import Head from 'next/head';
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
      {postData.title}
      <br />
      <Date dateString={postData.date} />
      <br />
      <ReactMarkdown
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                style={okaidia as any}
                PreTag='div'
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {postData.content}
      </ReactMarkdown>
    </Layout>
  );
}

export default BlogFeaturePost;
