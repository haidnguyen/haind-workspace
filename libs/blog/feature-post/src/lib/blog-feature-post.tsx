import { Box, Text } from '@chakra-ui/react';
import { PostDetail } from '@haind-workspace/blog/data-posts';
import { useTitle } from '@haind-workspace/blog/data-title';
import { Layout } from '@haind-workspace/blog/ui-layout';
import Head from 'next/head';
import Image from 'next/image';
import { Markdown } from './markdown';

export interface BlogFeaturePostProps {
  postData: PostDetail;
}

export function BlogFeaturePost({ postData }: BlogFeaturePostProps) {
  const { title, description, siteUrl } = useTitle();

  return (
    <>
      <Head>
        <title>
          {postData.title} | {title}
        </title>
        <meta name='description' content={description} />
        <meta name='og:title' content={postData.title} />
        <meta name='og:description' content={description} />
        <meta name='og:url' content={siteUrl} />
        <meta name='og:type' content='website' />
      </Head>

      <Layout>
        <Box w='100%' height={['250px', '400px']} pos='relative' mb={[2, 8]}>
          <Image src={postData.featuredImage} layout='fill' objectFit='contain' />
        </Box>

        <Text as='h1' fontSize={['3xl', '5xl']} fontWeight='bold' mb={2} textAlign='center'>
          {postData.title}
        </Text>
        <Markdown content={postData.content} />
      </Layout>
    </>
  );
}

export default BlogFeaturePost;
