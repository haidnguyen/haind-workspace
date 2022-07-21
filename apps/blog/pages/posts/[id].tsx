import { AllPostIds, getAllPostIds, getPostData } from '@haind-workspace/blog/data-posts';
import dynamic from 'next/dynamic';

export default dynamic(() => import('@haind-workspace/blog/feature-post').then(m => m.BlogFeaturePost));

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: AllPostIds[0]) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
