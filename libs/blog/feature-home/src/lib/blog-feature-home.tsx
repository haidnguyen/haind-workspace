import { Box } from '@chakra-ui/react';
import { PostData } from '@haind-workspace/blog/data-posts';
import { Date } from '@haind-workspace/blog/ui-date';
import { Layout } from '@haind-workspace/blog/ui-layout';
import Link from 'next/link';

interface BlogFeatureHomeProps {
  allPostsData: PostData[];
}

export function BlogFeatureHome({ allPostsData }: BlogFeatureHomeProps) {
  return (
    <Layout>
      <Box borderRadius={[0, 8]} border='1px' borderColor='gray.200' p={4} bgColor='white'>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <Box key={id} as='li' listStyleType='none'>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </Box>
          ))}
        </ul>
      </Box>
    </Layout>
  );
}

export default BlogFeatureHome;
