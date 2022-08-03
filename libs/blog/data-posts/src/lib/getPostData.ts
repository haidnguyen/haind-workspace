import matter from 'gray-matter';
import { postDirectory } from './postDirectory';
import { readFileContent } from './readFileContent';

export interface PostDetail {
  id: string;
  title: string;
  date: string;
  tags: string[];
  contentHtml: string;
  content: string;
}

export const getPostData = async (id: string, locale: string) => {
  const [fileContent] = await readFileContent(postDirectory, id, locale);
  const matterResult = matter(fileContent);

  return {
    id,
    content: matterResult.content,
    ...matterResult.data,
  };
};
