import { PostDetail } from '@haind-workspace/blog/data-posts';
import { Date } from '@haind-workspace/blog/ui-date';
import { Layout } from '@haind-workspace/blog/ui-layout';
import Head from 'next/head';

export interface BlogFeaturePostProps {
  postData: PostDetail;
}

export function BlogFeaturePost({ postData }: BlogFeaturePostProps) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}

export default BlogFeaturePost;
