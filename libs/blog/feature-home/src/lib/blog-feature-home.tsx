import { Box } from '@chakra-ui/react';
import { PostData } from '@haind-workspace/blog/data-posts';
import { useTitle } from '@haind-workspace/blog/data-title';
import { Layout } from '@haind-workspace/blog/ui-layout';
import Head from 'next/head';
import { PostItem } from './post-item';

interface BlogFeatureHomeProps {
  allPostsData: PostData[];
}

export function BlogFeatureHome({ allPostsData }: BlogFeatureHomeProps) {
  const { title, description } = useTitle();

  return (
    <>
      <Head>
        <title>Home Page | {title}</title>
        <meta property='description' content={description} />
        <meta property='og:title' content='Home Page' />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
      </Head>
      <Layout>
        <Box as='ul'>
          {allPostsData.map(({ id, date, tags, title, langs }) => (
            <PostItem key={id} id={id} date={date} tags={tags} title={title} langs={langs} />
          ))}
        </Box>
      </Layout>
    </>
  );
}

export default BlogFeatureHome;
