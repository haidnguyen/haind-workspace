import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import { postDirectory } from './postDirectory';

export interface PostDetail {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
}

export const getPostData = async (id: string, locale: string) => {
  const allFiles = readdirSync(path.join(postDirectory, id));
  const contentLocale = allFiles.map(fileName => fileName.replace(/\.md$/, '')).includes(locale) ? locale : 'en';
  const fullPath = path.join(postDirectory, id, `${contentLocale}.md`);
  const fileContent = readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContent);
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
};
