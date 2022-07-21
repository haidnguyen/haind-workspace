import { PostData } from '@haind-workspace/blog/data-posts';
import { BlogUiLayout } from '@haind-workspace/blog/ui-layout';

interface BlogFeatureHomeProps {
  allPostsData: PostData[];
}

export function BlogFeatureHome({ allPostsData }: BlogFeatureHomeProps) {
  return (
    <BlogUiLayout>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </BlogUiLayout>
  );
}

export default BlogFeatureHome;
