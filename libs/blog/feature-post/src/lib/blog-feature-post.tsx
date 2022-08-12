import { Box, Text } from '@chakra-ui/react';
import { PostDetail } from '@haind-workspace/blog/data-posts';
import { useTitle } from '@haind-workspace/blog/data-title';
import { Layout } from '@haind-workspace/blog/ui-layout';
import { NextSeo } from 'next-seo';
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
      <NextSeo
        title={postData.title}
        description={description}
        titleTemplate={` %s | ${title}`}
        openGraph={{
          title: postData.title,
          description,
          url: siteUrl,
          type: 'article',
          images: [
            {
              url: postData.featuredImage,
              alt: 'Featured Image',
              height: 400,
              width: 250,
            },
          ],
        }}
      />
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
