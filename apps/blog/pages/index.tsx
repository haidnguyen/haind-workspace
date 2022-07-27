import { getSortedPostsData } from '@haind-workspace/blog/data-posts';
import dynamic from 'next/dynamic';

export default dynamic(() => import('@haind-workspace/blog/feature-home').then(m => m.BlogFeatureHome), { ssr: false });

export async function getStaticProps({ locale }) {
  const allPostsData = getSortedPostsData(locale);

  return {
    props: {
      allPostsData,
    },
  };
}
