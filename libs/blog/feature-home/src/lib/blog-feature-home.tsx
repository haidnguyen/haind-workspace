import { Box } from '@chakra-ui/react';
import { PostData } from '@haind-workspace/blog/data-posts';
import { useTitle } from '@haind-workspace/blog/data-title';
import { Layout } from '@haind-workspace/blog/ui-layout';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { PostItem } from './post-item';

interface BlogFeatureHomeProps {
  allPostsData: PostData[];
}

export function BlogFeatureHome({ allPostsData }: BlogFeatureHomeProps) {
  const { title, description, siteUrl } = useTitle();

  return (
    <>
      <Head>
        <title>Home Page | ${title}</title>
        <meta name='description' content={description} />
        <meta name='og:title' content='Home Page' />
        <meta name='og:description' content={description} />
        <meta name='og:url' content={siteUrl} />
        <meta name='og:type' content='website' />
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
