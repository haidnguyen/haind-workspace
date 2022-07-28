import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { postDirectory } from './postDirectory';
import { readFileContent } from './readFileContent';

export interface PostDetail {
  id: string;
  title: string;
  date: string;
  tags: string[];
  contentHtml: string;
}

export const getPostData = async (id: string, locale: string) => {
  const fileContent = await readFileContent(postDirectory, id, locale);
  const matterResult = matter(fileContent);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};
