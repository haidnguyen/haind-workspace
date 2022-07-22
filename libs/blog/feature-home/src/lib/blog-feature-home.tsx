import { PostData } from '@haind-workspace/blog/data-posts';
import { Date } from '@haind-workspace/blog/ui-date';
import { Layout } from '@haind-workspace/blog/ui-layout';
import Link from 'next/link';

interface BlogFeatureHomeProps {
  allPostsData: PostData[];
}

export function BlogFeatureHome({ allPostsData }: BlogFeatureHomeProps) {
  return (
    <Layout>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export default BlogFeatureHome;
