import { getAllPostIds, getPostData, PostData } from '@haind-workspace/blog/data-posts';
import { BlogUiLayout } from '@haind-workspace/blog/ui-layout';

interface PostProps {
  postData: PostData;
}

export default function Post({ postData }: PostProps) {
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
