import { Box } from '@chakra-ui/react';
import { PostData } from '@haind-workspace/blog/data-posts';
import { Layout } from '@haind-workspace/blog/ui-layout';
import { PostItem } from './post-item';

interface BlogFeatureHomeProps {
  allPostsData: PostData[];
}

export function BlogFeatureHome({ allPostsData }: BlogFeatureHomeProps) {
  return (
    <Layout>
      <Box as='ul'>
        {allPostsData.map(({ id, date, tags, title }) => (
          <PostItem key={id} id={id} date={date} tags={tags} title={title} />
        ))}
      </Box>
    </Layout>
  );
}

export default BlogFeatureHome;
