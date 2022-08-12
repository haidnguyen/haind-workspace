import { Box } from '@chakra-ui/react';
import { PostData } from '@haind-workspace/blog/data-posts';
import { useTitle } from '@haind-workspace/blog/data-title';
import { Layout } from '@haind-workspace/blog/ui-layout';
import { NextSeo } from 'next-seo';
import { PostItem } from './post-item';

interface BlogFeatureHomeProps {
  allPostsData: PostData[];
}

export function BlogFeatureHome({ allPostsData }: BlogFeatureHomeProps) {
  const { title, description, siteUrl } = useTitle();

  return (
    <>
      <NextSeo
        title='Home Page'
        description={description}
        titleTemplate={` %s | ${title}`}
        openGraph={{
          title: 'Home Page',
          description,
          url: siteUrl,
          type: 'article',
        }}
      />
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
