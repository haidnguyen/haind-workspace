import { PostData } from '@haind-workspace/blog/data-posts';
import { BlogUiLayout } from '@haind-workspace/blog/ui-layout';

export interface BlogFeaturePostProps {
  postData: PostData;
}

export function BlogFeaturePost({ postData }: BlogFeaturePostProps) {
  return (
    <BlogUiLayout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </BlogUiLayout>
  );
}

export default BlogFeaturePost;
