import { getAllPostIds, getPostData } from '@haind-workspace/blog/data-posts';
import dynamic from 'next/dynamic';

export default dynamic(() => import('@haind-workspace/blog/feature-post').then(m => m.BlogFeaturePost));

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: ReturnType<typeof getAllPostIds>[0]) {
  const postData = getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
