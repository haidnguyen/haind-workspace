import { AllPostIds, getAllPostIds, getPostData } from '@haind-workspace/blog/data-posts';
import { BlogFeaturePost } from '@haind-workspace/blog/feature-post';

export default BlogFeaturePost;

export async function getStaticPaths({ locales }) {
  const paths = getAllPostIds(locales);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }: AllPostIds[0]) {
  const postData = await getPostData(params.id, locale);

  return {
    props: {
      postData,
    },
  };
}
