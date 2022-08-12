import { Box } from '@chakra-ui/react';
import { PostData } from '@haind-workspace/blog/data-posts';
import { useTitle } from '@haind-workspace/blog/data-title';
import { Layout } from '@haind-workspace/blog/ui-layout';
import { BlogUiSeo } from '@haind-workspace/blog/ui-seo';
import Head from 'next/head';
import { PostItem } from './post-item';

interface BlogFeatureHomeProps {
  allPostsData: PostData[];
}

export function BlogFeatureHome({ allPostsData }: BlogFeatureHomeProps) {
  const { title, description } = useTitle();

  return (
    <>
      <BlogUiSeo title={title} description={description} />
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
