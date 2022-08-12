import { getSortedPostsData } from '@haind-workspace/blog/data-posts';
import { BlogFeatureHome } from '@haind-workspace/blog/feature-home';

export default BlogFeatureHome;

export async function getStaticProps({ locale }) {
  const allPostsData = await getSortedPostsData(locale);

  return {
    props: {
      allPostsData,
    },
  };
}
