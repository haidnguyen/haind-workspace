import { PostDetail } from '@haind-workspace/blog/data-posts';
import { Date } from '@haind-workspace/blog/ui-date';
import { BlogUiLayout } from '@haind-workspace/blog/ui-layout';
import Head from 'next/head';

export interface BlogFeaturePostProps {
  postData: PostDetail;
}

export function BlogFeaturePost({ postData }: BlogFeaturePostProps) {
  return (
    <BlogUiLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </BlogUiLayout>
  );
}

export default BlogFeaturePost;
